<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();
require_once "includes/config.php";

$error = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name  = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $password = $_POST["password"];
    $confirm  = $_POST["confirm_password"];

    if ($password !== $confirm) {
        $error = "كلمتا المرور غير متطابقتين";
    } else {

        // تحقق هل الإيميل موجود
        $check = $conn->prepare("SELECT id FROM users WHERE email = ?");
        $check->bind_param("s", $email);
        $check->execute();
        $check->store_result();

        if ($check->num_rows > 0) {
            $error = "البريد الإلكتروني مستخدم بالفعل";
        } else {

            $hashed = password_hash($password, PASSWORD_DEFAULT);

            $stmt = $conn->prepare(
                "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
            );
            $stmt->bind_param("sss", $name, $email, $hashed);

            if ($stmt->execute()) {
                $_SESSION["user_id"] = $stmt->insert_id;
                header("Location: dashboard.php");
                exit;
            } else {
                $error = "حدث خطأ أثناء إنشاء الحساب";
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>إنشاء حساب | تعلم الإيطالية</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="assets/auth.css">
</head>
<body>

<div class="auth-wrapper">
    <div class="auth-card">

        <!-- Header -->
        <div class="auth-header">
            <h1>تعلم الإيطالية</h1>
            <p>إنشاء حساب جديد</p>
        </div>

        <!-- رسالة خطأ (لو موجودة من PHP) -->
        <?php if (!empty($error)): ?>
            <div class="auth-error">
                <?= $error ?>
            </div>
        <?php endif; ?>

        <!-- Form -->
        <form method="POST" action="register.php" class="auth-form">

            <div class="input-group">
                <label>الاسم الكامل</label>
                <input
                    type="text"
                    name="name"
                    placeholder="مثال: يوسف رمضان"
                    required
                >
            </div>

            <div class="input-group">
                <label>البريد الإلكتروني</label>
                <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    required
                >
            </div>

            <div class="input-group">
                <label>كلمة المرور</label>
                <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required
                >
            </div>

            <div class="input-group">
                <label>تأكيد كلمة المرور</label>
                <input
                    type="password"
                    name="confirm_password"
                    placeholder="••••••••"
                    required
                >
            </div>

            <button type="submit" name="register" class="btn-primary">
                إنشاء الحساب
            </button>
        </form>

        <!-- Footer -->
        <div class="auth-footer">
            <p>
                لديك حساب بالفعل؟
                <a href="login.php">تسجيل الدخول</a>
            </p>
        </div>

    </div>
</div>

</body>
</html>
