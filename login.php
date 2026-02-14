<?php 
session_start();
require_once "includes/config.php";

$error = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $email = trim($_POST["email"]);
    $password = $_POST["password"];

    $stmt = $conn->prepare(
        "SELECT id, name, password FROM users WHERE email = ?"
    );
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

        if (password_verify($password, $user["password"])) {

            $_SESSION["user_id"] = $user["id"];
            $_SESSION["name"] = $user["name"];

            header("Location: dashboard.php");
            exit;
        } else {
            $error = "كلمة المرور غير صحيحة";
        }
    } else {
        $error = "البريد الإلكتروني غير مسجل";
    }
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>تسجيل الدخول | تعلم الإيطالية</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="assets/auth.css">
</head>
<body>

<div class="auth-wrapper">
    <div class="auth-card">

        <div class="auth-header">
            <h1>⚡ تعلم الإيطالية</h1>
            <p>تسجيل الدخول إلى حسابك</p>
        </div>

        <!-- رسالة خطأ -->
        <?php if (!empty($error)): ?>
            <div class="auth-error"><?= $error ?></div>
        <?php endif; ?>

        <form method="POST" action="login.php" class="auth-form">

            <div class="input-group">
                <label>البريد الإلكتروني</label>
                <input type="email" name="email" placeholder="example@email.com" required>
            </div>

            <div class="input-group">
                <label>كلمة المرور</label>
                <input type="password" name="password" placeholder="••••••••" required>
            </div>

            <button type="submit" class="btn-primary">
                تسجيل الدخول
            </button>
        </form>

        <div class="auth-footer">
            <p>
                ليس لديك حساب؟
                <a href="register.php">إنشاء حساب جديد</a>
            </p>
        </div>

    </div>
</div>

</body>
</html>
