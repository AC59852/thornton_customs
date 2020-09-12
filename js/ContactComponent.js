export default {
    template: `
    <section id="contact">
        <div class="contactHeader">
            <h2>Contact Us</h2>
        </div>
        <div class="contactInfo">
            <div>
                <a href="mailto: email@email.com"><h3 id="contEmail">email@email.com</h3></a>
                <a href="tel: +1123456789"><h3 id="contPhone">123-456-7890</h3></a>
            </div>
        </div>
        <div class="contactCon">
            <div class="formWrapper">
                <form action="admin/signup.php" method="POST">
                    <div class="contactInput">
                        <input id="name" type="text" maxlength="25" name="name" required placeholder="Name">
                        <div></div>
                        <label for="name">Your Name</label>
                    </div>
                    <div class="contactInput">
                        <input id="email" type="email" maxlength="25" name="email" required placeholder="Email">
                        <div></div>
                        <label for="email">Your Email</label>
                    </div>
                    <div class="contactInput">
                        <textarea id="message" maxlength="400" name="message" data-gramm_editor="false" required placeholder="Message"></textarea>
                        <label for="message">Your Message</label>
                    </div>
                    <button name="submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
    `
}