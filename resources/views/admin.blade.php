<!doctype html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Hope UI | Responsive Bootstrap 5 Admin Dashboard Template</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="/admin/images/favicon.ico" />

    <!-- Library / Plugin Css Build -->
    <link rel="stylesheet" href="/admin/css/core/libs.min.css" />

    <!-- Aos Animation Css -->
    {{-- <link rel="stylesheet" href="/admin/vendor/aos/dist/aos.css" /> --}}

    <!-- Hope Ui Design System Css -->
    <link rel="stylesheet" href="/admin/css/hope-ui.min.css?v=1.2.0" />

    <!-- Custom Css -->
    <link rel="stylesheet" href="/admin/css/custom.min.css?v=1.2.0" />

    <!-- Dark Css -->
    <link rel="stylesheet" href="/admin/css/dark.min.css" />

    <!-- Customizer Css -->
    <link rel="stylesheet" href="/admin/css/customizer.min.css" />

    <!-- RTL Css -->
    <link rel="stylesheet" href="/admin/css/rtl.min.css" />

    @routes
    <script src="{{ mix('js/app.js') }}" defer></script>
    @inertiaHead

    <style>
        .sidebar-default .navbar-nav .nav-item .nav-link:not(.disabled).active,
        .sidebar-default .navbar-nav .nav-item .nav-link:not(.disabled)[aria-expanded=true] {
            background-color: rgba(255, 255, 255, 0);
            color: #E06D7A !important;
            box-shadow: none !important;
        }

        .breadcrumb-item+.breadcrumb-item::before {
            float: left;
            padding-right: 0.5rem;
            color: #ffffff;
            content: var(--bs-breadcrumb-divider, "/")
                /* rtl: var(--bs-breadcrumb-divider, "/") */
            ;
        }

        .breadcrumb-item.active {
            color: #c4c4c4;
        }

    </style>
</head>

<body class="theme-color-red">
    <!-- loader Start -->
    {{-- <div id="loading">
        <div class="loader simple-loader">
            <div class="loader-body"></div>
        </div>
    </div> --}}
    <!-- loader END -->

    <!-- Begin page -->
    @inertia
    <!-- END layout-wrapper -->

    <script src="/admin/js/core/libs.min.js"></script>
    <script src="/admin/js/core/external.min.js"></script>
    <script src="/admin/js/charts/widgetcharts.js"></script>
    <script src="/admin/js/charts/vectore-chart.js"></script>
    {{-- <script src="/admin/js/charts/dashboard.js"></script> --}}
    <script src="/admin/js/plugins/fslightbox.js"></script>
    <script src="/admin/js/plugins/setting.js"></script>
    <script src="/admin/js/plugins/slider-tabs.js"></script>
    <script src="/admin/js/plugins/form-wizard.js"></script>
    {{-- <script src="/admin/vendor/aos/dist/aos.js"></script> --}}
    {{-- <script src="/admin/js/hope-ui.js" defer></script> --}}
</body>

</html>
