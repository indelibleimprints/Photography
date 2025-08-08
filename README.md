
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
            <a href="#gallery">Gallery</a>![20211030_204041](https://github.com/user-attachments/assets/0b5a7ec0-276a-4ccd-9043-5f5666c51070)
![20211016_192740](https://github.com/user-attachments/assets/7388a2a8-7f18-4237-88bf-a40013aab9ea)
![20211010_102409](https://github.com/user-attachments/assets/611acae2-0076-4843-896e-3de86e22b5b4)
![20210905_064717](https://github.com/user-attachments/assets/f4bc2a20-4ed1-4865-b8d5-c08f41a34f5c)
![20210904_194318](https://github.com/user-attachments/assets/23e114fc-4b7c-4577-acf0-1ebddec2cd0d)

            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <!-- Gallery Section -->
    <section id="gallery">
        <h2>Gallery</h2>![photo2](https://github.com/user-attachments/assets/7b2b457d-b3f9-4833-9f53-5166a4c1ba24)
![Photo1](https://github.com/user-attachments/assets/2c06bc90-d231-4dac-9197-98d83695870c)
![photo3](https://github.com/user-attachments/assets/3e4c415f-9104-471b-a9f4-e55656539019)

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
        <p>&copy; 2025 Indelible Imprints</p>
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
