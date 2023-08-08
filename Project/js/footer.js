const footerPlaceholder = document.getElementById("footer-placeholder");

const footerCode = `
    <footer>
        <p>&copy; Retro Products. All rights reserved.</p>
        <p>Follow us on social media:
            <a href="https://www.instagram.com/accounts/login/?next=%2Fyour-instagram-handle%2F&source=desktop_nav"><img src="../img/insta.png" alt="Instagram"></a>
            <a href="https://www.facebook.com/your-facebook-handle/"><img src="../img/facebook.png" alt="Facebook"></a>
            <a href="https://www.twitter.com/your-twitter-handle/"><img src="../img/twitter.png" alt="Twitter"></a>
        </p>
    </footer>
`;

footerPlaceholder.innerHTML = footerCode;