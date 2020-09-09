export default {
    template: `
    <section>
        <div class="contactCon">
            <div class="formWrapper">
                <form action="admin/signup.php" method="POST">
                    <div class="contactInput">
                        <input id="name" type="text" maxlength="25" name="name" required>
                        <label for="name">Your Name</label>
                    </div>
                    <div class="contactInput">
                        <input id="email" type="email" maxlength="25" name="email" required>
                        <label for="email">Your Email</label>
                    </div>
                    <div class="contactInput">
                        <textarea id="message" maxlength="400" name="message" data-gramm_editor="false" required></textarea>
                        <label for="message">Your Message</label>
                    </div>
                    <button name="submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
    `
}