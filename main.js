const CARS_DATA = [
  {
    id: 1,
    marca: "Toyota",
    modelo: "Corolla",
    version: "XEI",
    anio: 2022,
    precio: 14990000,
    km: 28000,
    combustible: "Bencinero",
    transmision: "Automático",
    condicion: "Usado",
    tipo: "sedan",
    color: "Blanco",
    motor: "1.8L",
    imagen1: "https://chileautos.pxcrush.net/cars/dealer/ddtiwfx492p6wy2rqq8z1kp26.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600", // reemplaza con la ruta de la imagen
    imagen2: "https://chileautos.pxcrush.net/cars/dealer/dc1iptkrp2gxfpzlh77psvxk8.jpg?pxc_method=fit&pxc_size=1795%2c1195",
    imagen3: "https://chileautos.pxcrush.net/cars/dealer/bxm9yqvfdat6sfcpunfjz3qlm.jpg?pxc_method=fit&pxc_size=1795%2c1195",
    imagen4: "https://chileautos.pxcrush.net/cars/dealer/2hdkqb1h69uwwh16t6gzy563h.jpg?pxc_method=fit&pxc_size=1795%2c1195",
    imagen5: "https://chileautos.pxcrush.net/cars/dealer/ch60b3mn0hl7flij09minvq9y.jpg?pxc_method=fit&pxc_size=1795%2c1195",
    descripcion: "Toyota Corolla XEI en excelente estado, mantenciones al día, único dueño. Cuenta con sistema de seguridad Toyota Safety Sense, pantalla multimedia 8\" con Android Auto y Apple CarPlay.",
    caracteristicas: ["Airbags frontales y laterales","Control crucero adaptativo","Cámara de retroceso","Sensores de estacionamiento","Asientos de cuero","Techo solar"]
  },
  {
    id: 2,
    marca: "Chevrolet",
    modelo: "D-MAX",
    version: "High",
    anio: 2023,
    precio: 22500000,
    km: 12000,
    combustible: "Diésel",
    transmision: "Automático",
    condicion: "Usado",
    tipo: "pickup",
    color: "Gris",
    motor: "3.0L Turbo",
    imagen1: "https://chileautos.pxcrush.net/cars/dealer/2a0czbzrcsmgjbxfk8e3b1ixk.jpg?pxc_method=limitfill&pxc_bgtype=self&pxc_size=900%2c600",
    imagen2: "https://chileautos.pxcrush.net/cars/dealer/3r56psc5ochtpvdwbckl9j69h.jpg?pxc_method=fit&pxc_size=1795%2c1195",
    imagen3: "https://chileautos.pxcrush.net/cars/dealer/757smwv6ymgvbrqrz8qoty2zj.jpg?pxc_method=fit&pxc_size=1795%2c1195",
    imagen4: "https://chileautos.pxcrush.net/cars/dealer/4zpb7aywe9n4ere3ju77h76kb.jpg?pxc_method=fit&pxc_size=1795%2c1195",
    imagen5: "https://chileautos.pxcrush.net/cars/dealer/vsisz8xflrgpb4xgopjya0n9.jpg?pxc_method=fit&pxc_size=1795%2c1195",
    descripcion: "Chevrolet D-MAX High 4x4, ideal para trabajo y aventura. Tracción 4WD, diferencial trasero bloqueado, excelente capacidad de carga.",
    caracteristicas: ["4x4 con bloqueo diferencial","Control de descenso en pendiente","Climatizador automático","Cámara 360°","Asientos calefaccionados","Toldo retráctil"]
  },
  {
    id: 3,
    marca: "Hyundai",
    modelo: "Tucson",
    version: "GLS",
    anio: 2023,
    precio: 18750000,
    km: 0,
    combustible: "Bencinero",
    transmision: "Automático",
    condicion: "Nuevo",
    tipo: "suv",
    color: "Negro",
    motor: "2.0L",
    imagen1: "https://images.prd.kavak.io//eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvNTA3NjU3L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzc4MDA2Njc1NTExLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo1MjV9fX0=",
    imagen2: "https://images.prd.kavak.io//eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvNTA3NjU3L0VYVEVSSU9SLWZyb250LTE3NzgwMDY2NjIyNTguanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjUyNX19fQ==",
    imagen3: "https://images.prd.kavak.io//eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvNTA3NjU3L0lOVEVSSU9SLWZyb250Qm9hcmQtMTc3ODAwNzA1MDc2NS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6NTI1fX19",
    imagen4: "https://images.prd.kavak.io//eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvNTA3NjU3L0VYVEVSSU9SLW9wZW5Eb29yQ29waWxvdC0xNzc4MDA2ODIwNzg1LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo1MjV9fX0=",
    imagen5: "http://images.prd.kavak.io//eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvNTA3NjU3L0VYVEVSSU9SLW9wZW5Eb29yQmFja1BpbG90LTE3NzgwMDY3NTU4NDAuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjUyNX19fQ==",
    descripcion: "Hyundai Tucson GLS 2023, prácticamente nuevo. Diseño vanguardista, amplio espacio interior y la más completa tecnología de su segmento.",
    caracteristicas: ["Pantalla 10.25\" táctil","Apple CarPlay / Android Auto","Detector de punto ciego","Asistente de cambio de carril","Sistema BlueLink conectado","Freno de emergencia autónomo"]
  },
  {
    id: 4,
    marca: "Kia",
    modelo: "Sportage",
    version: "EX Pack",
    anio: 2021,
    precio: 16200000,
    km: 97774,
    combustible: "Bencinero",
    transmision: "Automático",
    condicion: "Usado",
    tipo: "suv",
    color: "Rojo",
    motor: "2.0L",
    imagen1: "https://http2.mlstatic.com/D_NQ_NP_2X_684630-MLC110979211734_052026-F-kia-sportage-sportage-ql-pe-20-aut-2021.webp",
    imagen2: "https://http2.mlstatic.com/D_NQ_NP_2X_691377-MLC109856731932_042026-F-kia-sportage-sportage-ql-pe-20-aut-2021.webp",
    imagen3: "https://http2.mlstatic.com/D_NQ_NP_2X_927364-MLC109856731928_042026-F-kia-sportage-sportage-ql-pe-20-aut-2021.webp",
    imagen4: "https://http2.mlstatic.com/D_NQ_NP_2X_706244-MLC109856731934_042026-F-kia-sportage-sportage-ql-pe-20-aut-2021.webp",
    imagen5: "https://http2.mlstatic.com/D_NQ_NP_2X_962214-MLC109856731940_042026-F-kia-sportage-sportage-ql-pe-20-aut-2021.webp",
    descripcion: "Kia Sportage EX Pack 2021, todo el equipamiento de serie. Garantía de fábrica vigente hasta 2026.",
    caracteristicas: ["Garantía de fábrica","Cámara 360°","Sunroof panorámico","Asientos ventilados","Head-up display","Control de crucero adaptativo"]
  },
  {
    id: 5,
    marca: "Mazda",
    modelo: "CX-5",
    version: "2.5 GT",
    anio: 2022,
    precio: 21900000,
    km: 18000,
    combustible: "Bencinero",
    transmision: "Automático",
    condicion: "Usado",
    tipo: "suv",
    color: "Blanco",
    motor: "2.5L SKYACTIV",
    imagen1: "https://http2.mlstatic.com/D_NQ_NP_912401-MLC112005956251_052026-O-mazda-cx-5-2022.webp",
    imagen2: "https://http2.mlstatic.com/D_NQ_NP_667295-MLC110747029090_052026-OO-mazda-cx-5-2022.jpg",
    imagen3: "https://http2.mlstatic.com/D_NQ_NP_622049-MLC110747029080_052026-OO-mazda-cx-5-2022.jpg",
    imagen4: "https://http2.mlstatic.com/D_NQ_NP_920490-MLC110747029100_052026-OO-mazda-cx-5-2022.jpg",
    imagen5: "https://http2.mlstatic.com/D_NQ_NP_812863-MLC110747029096_052026-OO-mazda-cx-5-2022.jpg",
    descripcion: "Mazda CX-5 GT, la joya del segmento SUV. Motor SKYACTIV-G 2.5, interior premium con cuero Nappa y sistema Bose de 10 parlantes.",
    caracteristicas: ["Motor SKYACTIV-G 2.5","Audio Bose 10 canales","Cuero Nappa premium","i-ACTIVSENSE safety","AWD tiempo real","HUD pantalla frontal"]
  },
  {
    id: 6,
    marca: "Nissan",
    modelo: "Frontier",
    version: "LE 4x4",
    anio: 2022,
    precio: 24300000,
    km: 0,
    combustible: "Diésel",
    transmision: "Manual",
    condicion: "Nuevo",
    tipo: "pickup",
    color: "Blanco",
    motor: "2.3L Twin Turbo",
    imagen1: "https://http2.mlstatic.com/D_NQ_NP_2X_730902-MLM110287421603_042026-F-nissan-frontier-25-le-dc-4x2-ta.webp",
    imagen2: "https://http2.mlstatic.com/D_NQ_NP_2X_730902-MLM110287421603_042026-F-nissan-frontier-25-le-dc-4x2-ta.webp",
    imagen3: "https://http2.mlstatic.com/D_NQ_NP_2X_931233-MLM109422716252_042026-F-nissan-frontier-25-le-dc-4x2-ta.webp",
    imagen4: "https://http2.mlstatic.com/D_NQ_NP_2X_923354-MLM109422597204_042026-F-nissan-frontier-25-le-dc-4x2-ta.webp",
    imagen5: "https://http2.mlstatic.com/D_NQ_NP_2X_830375-MLM110287242241_042026-F-nissan-frontier-25-le-dc-4x2-ta.webp",
    descripcion: "Nissan Frontier LE 4x4, la pickup de trabajo más versátil del mercado. Motor Twin-Turbo de alto rendimiento con bajo consumo de combustible.",
    caracteristicas: ["Motor Twin-Turbo","4x4 con bloqueo diferencial","Cámara de retroceso","Bluetooth / USB","Aire acondicionado","Barras portacargas"]
  },
];


if (document.getElementById('carsGrid')) {
  function renderCars(list) {
    const grid = document.getElementById('carsGrid');
    grid.innerHTML = '';

    list.forEach(car => {
      const card = document.createElement('a');
      card.className = 'car-card';
      // Pasa el ID del auto a la página de detalle
      card.href = `auto.html?id=${car.id}`;

      card.innerHTML = `
        <div class="car-img-wrap">
          ${car.imagen1
            ? `<img src="${car.imagen1}" alt="${car.marca} ${car.modelo}" style="width:100%;height:100%;object-fit:cover;">`
            : `<div class="car-img-placeholder">🚗</div>`
          }
          <span class="car-badge ${car.condicion === 'Usado' ? 'usado' : ''}">${car.condicion}</span>
        </div>
        <div class="car-body">
          <p class="car-brand">${car.marca}</p>
          <h3 class="car-name">${car.modelo} ${car.version ?? ''}</h3>
          <div class="car-specs">
            <span class="spec-item"><span class="spec-icon">📅</span>${car.anio}</span>
            <span class="spec-item"><span class="spec-icon">⛽</span>${car.combustible}</span>
            <span class="spec-item"><span class="spec-icon">⚙️</span>${car.transmision}</span>
            ${car.km ? `<span class="spec-item"><span class="spec-icon">🛣️</span>${car.km.toLocaleString()} km</span>` : ''}
          </div>
          <div class="car-footer">
            <div class="car-price"><sup>$</sup>${car.precio.toLocaleString()}</div>
            <span class="car-cta">Ver detalles →</span>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  // ── Filtros ──
  function filterCars(tipo, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filtered = tipo === 'todos'
      ? CARS_DATA
      : CARS_DATA.filter(c =>
          c.condicion.toLowerCase() === tipo ||
          c.tipo?.toLowerCase() === tipo
        );
    renderCars(filtered);
  }

  window.filterCars = filterCars;

  // Carga inicial
  renderCars(CARS_DATA);
}

if (document.getElementById('detailWrap')) {
  const params  = new URLSearchParams(window.location.search);
  const carId   = parseInt(params.get('id'));
  const car     = CARS_DATA.find(c => c.id === carId);

  if (!car) {
    document.getElementById('loadingState').textContent = 'Auto no encontrado.';
  } else {
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('detailWrap').style.display   = 'grid';
    document.getElementById('relatedSection').style.display = 'block';

    document.title = `${car.marca} ${car.modelo} ${car.version} | AutoMotora`;

    document.getElementById('breadcrumbName').textContent = `${car.marca} ${car.modelo}`;

    // ── Galería ──────────────────────────────────────────────────────────────
    const galleryMain   = document.getElementById('galleryMain');
    const galleryThumbs = document.getElementById('galleryThumbs');

    // Reúne todas las imágenes disponibles (imagen1 → imagen5)
    const allImages = [
      car.imagen1, car.imagen2, car.imagen3, car.imagen4, car.imagen5
    ].filter(src => src); // descarta undefined / vacías

    // Función para cambiar la imagen principal
    function setActiveImage(src, activeThumb) {
      // Actualiza imagen principal (conserva el badge dentro del div)
      const existing = galleryMain.querySelector('img');
      if (existing) {
        existing.src = src;
      } else {
        const img = document.createElement('img');
        img.alt = `${car.marca} ${car.modelo}`;
        galleryMain.insertBefore(img, galleryMain.firstChild);
        img.src = src;
      }

      // Marca el thumb activo
      galleryThumbs.querySelectorAll('.gallery-thumb').forEach(t =>
        t.classList.remove('active')
      );
      activeThumb.classList.add('active');
    }

    // Limpia thumbs de ejemplo y construye los reales
    galleryThumbs.innerHTML = '';

    allImages.forEach((src, index) => {
      const thumb = document.createElement('div');
      thumb.className = 'gallery-thumb';
      thumb.innerHTML = `<img src="${src}" alt="${car.marca} ${car.modelo} - foto ${index + 1}" style="width:100%;height:100%;object-fit:cover;">`;

      thumb.addEventListener('click', () => setActiveImage(src, thumb));
      galleryThumbs.appendChild(thumb);
    });

    // Muestra la primera imagen y marca su thumb como activo al cargar
    if (allImages.length > 0) {
      const firstThumb = galleryThumbs.querySelector('.gallery-thumb');
      setActiveImage(allImages[0], firstThumb);
    }

    // Badge condición
    const badge = document.getElementById('galleryBadge') ?? (() => {
      const b = document.createElement('span');
      b.className = 'gallery-badge';
      galleryMain.appendChild(b);
      return b;
    })();
    badge.textContent = car.condicion;
    if (car.condicion === 'Usado') badge.classList.add('usado');
    // ─────────────────────────────────────────────────────────────────────────

    // Info básica
    document.getElementById('carBrand').textContent   = car.marca;
    document.getElementById('carName').textContent    = `${car.marca} ${car.modelo}`;
    document.getElementById('carVersion').textContent = car.version ?? '';
    document.getElementById('carPrice').innerHTML     = `<sup>$</sup>${car.precio.toLocaleString()}`;
    document.getElementById('carDesc').textContent    = car.descripcion ?? '';

    // Specs rápidas
    const specsData = [
      { label: 'Año',          value: car.anio },
      { label: 'Kilómetros',   value: car.km ? `${car.km.toLocaleString()} km` : 'N/A' },
      { label: 'Combustible',  value: car.combustible },
      { label: 'Transmisión',  value: car.transmision },
      { label: 'Motor',        value: car.motor ?? 'N/A' },
      { label: 'Color',        value: car.color ?? 'N/A' },
    ];

    const sq = document.getElementById('specsQuick');
    specsData.forEach(s => {
      sq.innerHTML += `
        <div class="spec-box">
          <div class="spec-box-label">${s.label}</div>
          <div class="spec-box-value">${s.value}</div>
        </div>`;
    });

    // Características
    const fl = document.getElementById('featuresList');
    (car.caracteristicas ?? []).forEach(f => {
      fl.innerHTML += `
        <div class="feature-item">
          <span class="feature-check">✓</span>
          ${f}
        </div>`;
    });

    // Ficha técnica completa
    const fichaRows = [
      ['Marca',         car.marca],
      ['Modelo',        car.modelo],
      ['Versión',       car.version ?? '—'],
      ['Año',           car.anio],
      ['Tipo',          car.tipo?.toUpperCase() ?? '—'],
      ['Condición',     car.condicion],
      ['Motor',         car.motor ?? '—'],
      ['Combustible',   car.combustible],
      ['Transmisión',   car.transmision],
      ['Kilometraje',   car.km ? `${car.km.toLocaleString()} km` : 'N/A'],
      ['Color',         car.color ?? '—'],
    ];

    const ft = document.getElementById('fichaTable');
    fichaRows.forEach(([k, v]) => {
      ft.innerHTML += `<tr><td>${k}</td><td>${v}</td></tr>`;
    });

    // Autos relacionados
    const related = CARS_DATA.filter(c => c.id !== car.id).slice(0, 3);
    const rg = document.getElementById('relatedGrid');
    related.forEach(rc => {
      rg.innerHTML += `
        <a class="car-card-sm" href="auto.html?id=${rc.id}">
          <div class="card-sm-img">
            ${rc.imagen1 ? `<img src="${rc.imagen1}" alt="${rc.marca}" style="width:100%;height:100%;object-fit:cover;">` : '🚗'}
          </div>
          <div class="card-sm-body">
            <p class="card-sm-brand">${rc.marca}</p>
            <h3 class="card-sm-name">${rc.modelo} ${rc.version ?? ''}</h3>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="card-sm-price">$${rc.precio.toLocaleString()}</span>
              <span style="font-size:12px;color:var(--muted);">${rc.anio}</span>
            </div>
          </div>
        </a>`;
    });
  }
}