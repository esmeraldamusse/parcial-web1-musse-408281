const content = document.getElementById('content');

const sections = {
  muro: `
    <h2>Muro</h2>

    <!-- Formulario para escribir -->
  <form id="postForm">
    <textarea id="postText" placeholder="¿Qué estás pensando?" required></textarea>
    <button type="submit">Publicar</button>
  </form>

    <div class="post">
      <strong>Esmeralda</strong> - Actualizó su foto de perfil
      <p>Lunes a las 11:46pm</p>
      <img src="img/perfil1.jpg" alt="Foto de Esmeralda">
      <a href="#">Ver los 6 comentarios</a>
    </div>

    <div class="post">
      <strong>Nora</strong> - Actualizó su foto de perfil
      <p>Martes a las 11:46pm</p>
      <img src="img/perfil2.png" alt="Foto de Nora">
      <a href="#">Ver los 6 comentarios</a>
    </div>

      <div class="post">
      <strong>Esmeralda</strong> - Actualizó su foto de perfil
      <p>Lunes a las 11:46pm</p>
      <img src="img/perfil1.jpg" alt="Foto de Esmeralda">
      <a href="#">Ver los 6 comentarios</a>
    </div>
  `,

  info: `
  <h2>Info</h2>
  <hr><br>
  <div class="info-container">
    <div class="info-text">
      <p><strong>Email:</strong> usuario@correo.com</p><br>
      <p><strong>Teléfono:</strong> 123456789</p><br>
      <p><strong>Intereses:</strong> Música, Viajes, Tecnología</p><br>
      <p><strong>Situación sentimental:</strong> Soltero/a</p><br>
      <div class="info-actions">
        <button class="like-btn">Me gusta</button>
        <button class="share-btn"> Compartir</button>
      </div>
    </div>
    <div class="info-image">
      <img src="img/perfil.png" alt="Foto Info">
    </div>
  </div>


  `,

  photos: `
    <h2>Fotos</h2>
    <div class="photos-grid">
      <img src="img/foto.jpg" alt="Foto 1">
      <img src="img/foto1.jpg" alt="Foto 2">
      <img src="img/foto2.jpg" alt="Foto 3">
      <img src="img/foto3.png" alt="Foto 4">
      <img src="img/foto.jpg" alt="Foto 1">
      <img src="img/foto1.jpg" alt="Foto 2">
      <img src="img/foto2.jpg" alt="Foto 3">
      <img src="img/foto3.png" alt="Foto 4">
      <img src="img/foto.jpg" alt="Foto 1">
      <img src="img/foto1.jpg" alt="Foto 2">
      <img src="img/foto2.jpg" alt="Foto 3">
      <img src="img/foto3.png" alt="Foto 4">
      <img src="img/foto.jpg" alt="Foto 1">
      <img src="img/foto1.jpg" alt="Foto 2">
      <img src="img/foto2.jpg" alt="Foto 3">
      <img src="img/foto3.png" alt="Foto 4">
      <img src="img/foto.jpg" alt="Foto 1">
      <img src="img/foto1.jpg" alt="Foto 2">
      <img src="img/foto2.jpg" alt="Foto 3">
      <img src="img/foto3.png" alt="Foto 4">
      <img src="img/foto.jpg" alt="Foto 1">
      <img src="img/foto1.jpg" alt="Foto 2">
      <img src="img/foto2.jpg" alt="Foto 3">
      <img src="img/foto3.png" alt="Foto 4">
    </div>
  `,

  boxes: `
     <h2>Cajas</h2>

  <div class="box">
    <h3>Música favorita</h3>
    <ul>
      <li>Coldplay Viva la Vida</li>
      <li>Shakira Hips Don’t Lie</li>
      <li>Bad Bunny Tití me preguntó</li>
    </ul>
  </div>

  <div class="box">
    <h3>Películas / Series</h3>
    <p>Harry Potter, Stranger Things, Avengers</p>
  </div>

  <div class="box">
    <h3>Frase que me inspira</h3>
    <blockquote>
      "La vida es un 10% lo que me ocurre y 90% cómo reacciono a ello."
    </blockquote>
  </div>

  <div class="box">
    <h3> Sobre mí</h3>
    <p>Estudiante de Ingeniería en Sistemas, apasionada por la tecnología y los viajes.</p>
  </div>
  `
};

// Carga inicial
content.innerHTML = sections.muro;

// Navegación
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab.active').classList.remove('active');
    tab.classList.add('active');
    const s = tab.getAttribute('data-section');
    content.innerHTML = sections[s];
  });
});