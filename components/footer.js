function footer(){
    return`
    <div id="backImg">
    <div id="f1">
        <p id="f1P">Want style Ideas and Treats?</p>
        <input id="f1Email" placeholder="Enter Email *"/>
        <button id="f1Subscribe">Subscribe</button>
    </div>
    <div id="f2">
        <div id="f2a">
            <a href=""><img id="fLogo" src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/uboric.png"/></a>
            <img id="fb" class="f2alogo" src="data:image/png;base64,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"/>
            <img  class="f2alogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucfdbaeONYk2bERh8GqprQJSya_uLnhBmMt0cW4va2A&s"/>

        </div>
        <div id="f2b">
            <p class="f2bP">SUPPORT</p>
            <a class="fa" href=""><p class="fpp" class="fp">About Us</p></a>
            <a class="fa" href=""><p class="fpp" class="fp">Contact Us</p></a>
        </div>
        <div id="f2c">
            <p class="f2bP">SHOP</p>
            <a class="fa" href=""><p class="fpp" class="fp">My account</p></a>
        </div>
        <div id="f2d">
            <p class="f2bP">COMPANY</p>
            <a class="fa" href=""><p class="fpp" class="fp">Shipping & Returns</p></a>
            <a class="fa" href=""><p class="fpp" class="fp">Privacy Policy </p></a>
            <a class="fa" href=""><p class="fpp" class="fp"> Terms & Conditions</p></a>
        </div>
        <div id="f2e">
            <p class="f2bP">CONTACT</p>
            <p class="fp">Customer Care</p>
            <p class="fp">Contact Support Available</p>
            <p class="fp">Mon To Sat : 10:00 Am to 6:00 Pm</p>
            <p class="fp">E-mail</p>
            <p class="fp">uboricllp@gmail.com</p>
            <p class="fp">Mobile</p>
            <p class="fp">+91 97243 82162</p>
            <p class="fp">+91 82000 99386</p>
        </div>
    </div>
    <div id="f3">
        <div id="f3a">
        <p>© 2019 – 2022 UBORIC. ALL RIGHTS RESERVED.</p>
    </div>
    <div id="f3b">
        <img id="fb" class="f3alogo" src="data:image/png;base64,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"/>
            <img  class="f3alogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucfdbaeONYk2bERh8GqprQJSya_uLnhBmMt0cW4va2A&s"/>


    </div>
       
    </div>
</div>`
}
export default footer;