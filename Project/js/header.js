const headerPlaceholder = document.getElementById("header-placeholder");

const headerCode = `
    <header>
        <div class="logo">
            <img src="../img/logo.jpg" alt="Company Logo">
            <h1> Retro Restoration </h1>
        </div>
        <nav>
            <ul>
                <li><a href="../html/Hompage.html"> Homepage </a></li>
                <li><a href="../html/AboutCompany.html">About Company</a></li>
                <li><a href="../html/Products.html">Products</a></li>
                <li><a href="../html/Contactus.html">Contact Us</a></li>
            </ul>
        </nav>
    </header>
`;

headerPlaceholder.innerHTML = headerCode;