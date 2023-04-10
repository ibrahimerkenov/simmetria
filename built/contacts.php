<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="utf-8">
	<!-- Name site title -->
	<title>Simmetria</title>
	<!-- Meta tag -->
	<meta name="author" content="">
	<meta name="description" lang="ru" content="">
	<meta name="keywords" lang="ru" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Load CSS Compiled-->
	<link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans%7CRubik:300,300i,400,700,900&display=swap&subset=cyrillic" rel="stylesheet">
	<link rel="stylesheet" href="libs/fontawesome/all.min.css">
	<link rel="stylesheet" href="libs/swiper/swiper.min.css">
	<link rel="stylesheet" href="libs/magnific/magnific-popup.min.css">
	<link rel="stylesheet" href="libs/normalize/normalize.css">
	<link rel="stylesheet" href="css/style.min.css">
</head>

<body>
	
	<header class="header" id="header">
		<div class="container">
			<div class="header__top header__top--white">
				<div class="header__company">
					<a class="logo header__logo" href="/simmetria/">
						<img src="img/logo-black.png" alt="Logo">
					</a>
					<h2>Дизайнерский ремонт и отделка<br>квартир, домов под ключ</h2>
				</div>
				<div class="header__communication">
					<a class="phone header__phone" href="tel:+998901234567">+998 (90) 123-45-67</a>
					<a class="btn btn--transparent btn--sm header__btn" href="#">Заказать&nbsp;звонок</a>
				</div>
				<button class="header__trigger">
					<span></span>
				</button>
			</div>
		</div>
		<div class="header__navigation header__navigation--white">
			<div class="container">
				<nav class="header__nav nav">
					<ul class="header__menu menu">
						<li class="menu__item"><a href="/simmetria/" class="menu__link">Главная</a></li>
						<li class="menu__item"><a href="/simmetria/company.php" class="menu__link">О компании</a></li>
						<li class="menu__item"><a href="/simmetria/services.php" class="menu__link">Услуги</a></li>
						<li class="menu__item"><a href="/simmetria/partners.php" class="menu__link">Партнёры</a></li>
						<li class="menu__item"><a href="/simmetria/our-works.php" class="menu__link">Наши работы</a></li>
						<li class="menu__item"><a href="/simmetria/reviews.php" class="menu__link">Отзывы</a></li>
						<li class="menu__item"><a href="/simmetria/contacts.php" class="menu__link">Контакты</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>

	<main class="main">

		<div class="container">
			<div class="breadcrumbs">
				<ul class="breadcrumbs__list">
					<li class="breadcrumbs__item">
						<a class="breadcrumbs__link" href="/simmetria/">Главная</a>
					</li>
					<li class="breadcrumbs__item">
						<a class="breadcrumbs__link" href="/simmetria/contacts.php">Контакты</a>
					</li>
				</ul>
			</div>
		</div>

		<section class="our-contacts" id="our-contacts">
			<div class="container">
				<?php include 'section-our-contacts.php' ?>
				<div class="form-block our-contacts__form-block">
					<h3 class="form-block__title">
						<strong>Остались вопросы ?</strong>
						<small>Оставьте свой телефон и наш менеджер в ближайшее время Вам перезвонит</small>
					</h3>
					<form class="form our-contacts__form" action="#">

						<div class="our-contacts__row">
							<div class="our-contacts__column">
								<label class="form__label" for="input-name4">Ваше имя</label>
								<input class="form__input" id="input-name4" type="text" placeholder="Константин">
							</div>
							<div class="our-contacts__column">
								<label class="form__label" for="input-phone4">Ваш телефон</label>
								<input class="form__input" id="input-phone4" placeholder="+998 9">
							</div>

						</div>

						<div class="our-contacts__row">
							<input class="form__input-checkbox" id="input-checkbox4" type="checkbox">
							<label class="form__label-checkbox" for="input-checkbox4">Принимаю условия <a href="#">обработки данных</a></label>
							<input class="btn btn--orange btn--medium form__btn our-contacts__form-btn" type="submit" value="Отправить">
						</div>

					</form>
				</div>
			</div>
		</section>

	</main>
	
	<?php include 'footer.php'; ?>

	<!-- Load Scripts Start -->
	<script src="libs/jquery/jquery-3.3.1.min.js"></script>
	<script src="libs/swiper/swiper.min.js"></script>
	<script src="libs/magnific/jquery.magnific-popup.min.js"></script>
	<script src="js/main.min.js"></script>
	<!-- Load Scripts End -->

</body>
</html>
