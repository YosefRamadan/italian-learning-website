<?php
session_start();
require_once "includes/config.php";

if (!isset($_SESSION["user_id"])) {
    header("Location: login.php");
    exit;
}

$user_id = $_SESSION["user_id"];

$stmt = $conn->prepare("SELECT name, email FROM users WHERE id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$user = $stmt->get_result()->fetch_assoc();

$success = "";
$error = "";

/* تحديث الاسم */
if (isset($_POST["update_name"])) {
    $newName = trim($_POST["name"]);

    if ($newName !== "") {
        $stmt = $conn->prepare("UPDATE users SET name = ? WHERE id = ?");
        $stmt->bind_param("si", $newName, $user_id);
        $stmt->execute();

        $_SESSION["name"] = $newName;
        $success = "تم تحديث الاسم بنجاح ✅";
    }
}

/* تغيير كلمة المرور */
if (isset($_POST["update_password"])) {
    $newPass = $_POST["password"];

    if (strlen($newPass) >= 6) {
        $hashed = password_hash($newPass, PASSWORD_DEFAULT);
        $stmt = $conn->prepare("UPDATE users SET password = ? WHERE id = ?");
        $stmt->bind_param("si", $hashed, $user_id);
        $stmt->execute();

        $success = "تم تغيير كلمة المرور بنجاح 🔐";
    } else {
        $error = "كلمة المرور يجب ألا تقل عن 6 حروف";
    }
}
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>حسابي</title>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/profile.css">
</head>
<body>

<header class="profile-top">
  <h1>👤 حسابي</h1>
  <a href="dashboard.php">⬅ العودة للوحة التحكم</a>
</header>

<main class="profile-box">

<?php if ($success): ?>
  <div class="msg success"><?= $success ?></div>
<?php endif; ?>

<?php if ($error): ?>
  <div class="msg error"><?= $error ?></div>
<?php endif; ?>

<!-- تعديل الاسم -->
<form method="post" class="card">
  <h3>المعلومات الشخصية</h3>

  <label>الاسم</label>
  <input type="text" name="name" value="<?= htmlspecialchars($user["name"]) ?>" required>

  <label>البريد الإلكتروني</label>
  <input type="email" value="<?= htmlspecialchars($user["email"]) ?>" disabled>

  <button name="update_name">حفظ التعديلات</button>
</form>

<!-- تغيير كلمة المرور -->
<form method="post" class="card">
  <h3>تغيير كلمة المرور</h3>

  <label>كلمة مرور جديدة</label>
  <input type="password" name="password" required>

  <button name="update_password">تغيير كلمة المرور</button>
</form>

<!-- تسجيل الخروج -->
<div class="logout-box">
  <a href="logout.php">🚪 تسجيل الخروج</a>
</div>

</main>

</body>
</html>
