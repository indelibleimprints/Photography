[index.html]<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Photography Name</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Your Photography Name</h1>
        <nav>
            <a href="#gallery">Gallery</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <!-- Gallery Section -->
    <section id="gallery">
        <h2>Gallery</h2>
        <div class="grid">
            <img src="images/photo1.jpg" alt="Sample Photo 1">
            <img src="images/photo2.jpg" alt="Sample Photo 2">
            <img src="images/photo3.jpg" alt="Sample Photo 3">
            <!-- Add more images as needed -->
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing">
        <h2>Pricing</h2>
        <div class="pricing-container">
            <div class="pricing-card">
                <h3>Basic Package</h3>
                <p class="price">$100</p>
                <p>1 Hour Session<br>10 Edited Photos<br>Online Gallery</p>
            </div>
            <div class="pricing-card">
                <h3>Standard Package</h3>
                <p class="price">$250</p>
                <p>2 Hour Session<br>25 Edited Photos<br>Online Gallery + Prints</p>
            </div>
            <div class="pricing-card">
                <h3>Premium Package</h3>
                <p class="price">$500</p>
                <p>4 Hour Session<br>50 Edited Photos<br>Album + Online Gallery</p>
            </div>
        </div>
    </section>

    <!-- Contact & Socials -->
    <section id="contact">
        <h2>Contact Me</h2>
        <form>
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
        <div class="socials">
            <a href="https://instagram.com" target="_blank">Instagram</a>
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="mailto:you@example.com">Email</a>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 Your Photography Name</p>
    </footer>
</body>
</html>
l](https://github.com/user-attachments/files/21692587/index.html.txt)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Indelible Imprints</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Indelible Imprints</h1>
        <nav>
            <a href="#gallery">Gallery</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <!-- Gallery Section -->
    <section id="gallery">
        <h2>Gallery</h2>
        <div class="grid">
            <img src="images/photo1.jpg" alt="Sample Photo 1">
            <img src="images/photo2.jpg" alt="Sample Photo 2">
            <img src="images/photo3.jpg" alt="Sample Photo 3">
            <!-- Add more images as needed -->
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing">
        <h2>Pricing</h2>
        <div class="pricing-container">
            <div class="pricing-card">
                <h3>Basic Package</h3>
                <p class="price">$100</p>
                <p>1 Hour Session<br>10 Edited Photos<br>Online Gallery</p>
            </div>
            <div class="pricing-card">
                <h3>Standard Package</h3>
                <p class="price">$250</p>
                <p>2 Hour Session<br>25 Edited Photos<br>Online Gallery + Prints</p>
            </div>
            <div class="pricing-card">
                <h3>Premium Package</h3>
                <p class="price">$500</p>
                <p>4 Hour Session<br>50 Edited Photos<br>Album + Online Gallery</p>
            </div>
        </div>
    </section>

    <!-- Contact & Socials -->
    <section id="contact">
        <h2>Contact Me</h2>
        <form>
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
        <div class="socials">
            <a href="https://instagram.com" target="_blank">Instagram</a>
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="mailto:you@example.com">Email</a>
        </div>
    </section>

    <footer>
        <p>&copy; 2025 Your Photography Name</p>
    </footer>
</body>
</html>



body {
    font-family: Arial, sans-serif;
    margin: 0;
    background: #f8f9fa;
}

header {
    background: #222;
    color: white;
    padding: 1rem;
    text-align: center;
}

header nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}

h2 {
    text-align: center;
    margin-top: 2rem;
}

/* Gallery */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
    padding: 20px;
}

.grid img {
    width: 100%;
    border-radius: 5px;
}

/* Pricing */
.pricing-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}

.pricing-card {
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    margin: 10px;
    padding: 20px;
    width: 250px;
    text-align: center;
}

.price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

/* Contact */
form {
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
}

form input, form textarea {
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    background: #222;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
}

.socials {
    text-align: center;
    margin-top: 1rem;
}

.socials a {
    margin: 0 10px;
    text-decoration: none;
    color: #222;
}

/* Footer */
footer {
    text-align: center;
    padding: 1rem;
    background: #222;
    color: white;
    margin-top: 2rem;
}
