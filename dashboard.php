<?php
require_once "includes/auth.php";
require_once "includes/config.php";

$user_id = $_SESSION['user_id'];

/* بيانات المستخدم */
$stmt = $conn->prepare("SELECT name, created_at FROM users WHERE id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$user = $stmt->get_result()->fetch_assoc();

/* متوسط التقدم */
$progress = $conn->prepare("SELECT AVG(progress_percent) as avg_progress FROM progress WHERE user_id = ?");
$progress->bind_param("i", $user_id);
$progress->execute();
$progressData = $progress->get_result()->fetch_assoc();
$avgProgress = round($progressData['avg_progress'] ?? 0);

/* آخر اختبار */
$lastTest = $conn->prepare("SELECT score, taken_at FROM test_results WHERE user_id = ? ORDER BY taken_at DESC LIMIT 1");
$lastTest->bind_param("i", $user_id);
$lastTest->execute();
$last = $lastTest->get_result()->fetch_assoc();

/* أعلى نتيجة */
$best = $conn->prepare("SELECT MAX(score) as best_score FROM test_results WHERE user_id = ?");
$best->bind_param("i", $user_id);
$best->execute();
$bestScore = $best->get_result()->fetch_assoc();

require_once "includes/header.php";
?>

<div class="dashboard-wrapper">

    <div class="dashboard-header">
        <h1>مرحباً <?= htmlspecialchars($user['name']) ?> 👋</h1>
        <?php if (!empty($user['created_at'])): ?>
    <p>تاريخ التسجيل: <?= date("d-m-Y", strtotime($user['created_at'])) ?> 📅</p>
<?php else: ?>
    <p>تاريخ التسجيل غير متوفر</p>
<?php endif; ?>

    </div>

    <div class="dashboard-main">

        <!-- ================= STATS ================= -->
        <section class="stats">

            <div class="card">
                <h3>📊 نسبة التقدم</h3>

                <div class="progress-bar">
                    <div class="progress-fill" style="width: <?= $avgProgress ?>%;"></div>
                </div>

                <p><?= $avgProgress ?>%</p>
            </div>

            <div class="card">
                <h3>🧠 آخر اختبار</h3>

                <?php if ($last): ?>
                    <p><?= $last['score'] ?>%</p>
                    <span><?= date("d-m-Y", strtotime($last['taken_at'])) ?></span>
                <?php else: ?>
                    <p>لا يوجد اختبار بعد</p>
                <?php endif; ?>
            </div>

            <div class="card">
                <h3>🏆 أعلى نتيجة</h3>
                <p><?= $bestScore['best_score'] ?? 0 ?>%</p>
            </div>

        </section>

        <!-- ================= SECTIONS ================= -->
        <section class="sections">

            <a href="dashboard-pages/vocabulary.php" class="section-card">
                📘 المفردات
            </a>

            <a href="dashboard-pages/verbs.php" class="section-card">
                ⚡ الأفعال
            </a>

            <a href="dashboard-pages/grammar.php" class="section-card">
                ✏️ القواعد
            </a>

            <a href="dashboard-pages/phrases.php" class="section-card">
                💬 العبارات
            </a>

            <a href="dashboard-pages/quizzes.php" class="section-card">
                🎯 الاختبارات
            </a>

            <a href="dashboard-pages/profile.php" class="section-card">
                👤 الملف الشخصي
            </a>

        </section>

    </div>

</div>

<?php require_once "includes/footer.php"; ?>
