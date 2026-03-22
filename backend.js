// --- (EDIT DATA) ---
const products = [
    {
        id: 1, category: 'Fashion', name: 'POLOSHIRT XAUUSD NO RISK NO PORSCHE', price: '฿962.00',
        img: 'POLOSHIRT XAUUSD NO RISK NO PORSCHE2.webp',
        images: [
            'POLOSHIRT XAUUSD NO RISK NO PORSCHE2.webp',
            'POLOSHIRT XAUUSD NO RISK NO PORSCHE.webp'
        ],
        desc: `<b>เสื้อโปโลสายเทรด XAUUSD NO RISK NO PORSCHE</b><br>
                ดีไซน์สุดเท่ สำหรับวัยรุ่นยุคใหม่ ใส่แล้วกราฟพุ่ง! 🚀<br><br>
                • <b>เนื้อผ้า:</b> CVC Pique Hexagon (รังผึ้ง) เกรดพรีเมียม นุ่ม ใส่สบาย<br>
                • <b>งานสกรีน:</b> เทคนิค Glitter & DTF สวยคมชัด เล่นแสงวิบวับ<br>
                • <b>การดูแล:</b> แนะนำซักมือเพื่อถนอมลายสกรีน (ห้ามปั่นแห้ง)`, link: 'https://s.shopee.co.th/70FZAV5QSE'
    },
    {
        id: 2, category: 'Fashion', name: 'เสื้อโปโล Glitter XAUUSD ORIGINAL HERACLE', price: '฿739',
        img: 'เสื้อโปโล Glitter XAUUSD ORIGINAL HERACLE.webp',
        images: [
            'เสื้อโปโล Glitter XAUUSD ORIGINAL HERACLE.webp',
            'เสื้อโปโล Glitter XAUUSD ORIGINAL HERACLE2.webp'
        ],
        desc: `<b>HERACLE ดั้งเดิม เสื้อโปโล XAUUSD</b><br>
                เสื้อโปโลแฟชั่นผู้ชาย สไตล์สตรีท งานนำเข้าจากอินโดนีเซีย<br><br>
                • <b>วัสดุ:</b> ผ้า PIQUE (ฝ้าย) คุณภาพดี ใส่สบาย<br>
                • <b>งานสกรีน:</b> เทคนิค Glitter แวววาว สวยงาม<br>
                • <b>ไซส์:</b> S - XXXL (ดูตารางไซส์ที่รูปสุดท้าย)<br>
                • <b>หมายเหตุ:</b> สินค้าพร้อมส่ง ราคารวมค่าจัดส่งแล้ว`, link: 'https://s.shopee.co.th/4qB5xcKz7w'
    },
    {
        id: 3, category: 'Fashion', name: 'Fearless เสื้อยืดแขนสั้น Bone T-Shirt', price: '฿890',
        img: 'Fearless เสื้อยืดแขนสั้น Bone T-Shirt.webp',
        images: [
            'Fearless เสื้อยืดแขนสั้น Bone T-Shirt.webp',
            'Fearless เสื้อยืดแขนสั้น Bone T-Shirt2.webp'
        ],
        desc: `<b>Bone T-Shirt (สินค้าแท้จากแบรนด์)</b><br>
                เสื้อยืดแฟชั่นผู้ชาย สกรีนลายตัวหนังสือ "Bone"<br><br>
                • <b>วัสดุ:</b> Cotton 100%<br>
                • <b>ไซส์ (รอบอก / ความยาว):</b><br>
                &nbsp;&nbsp; M: 40" / 29"<br>
                &nbsp;&nbsp; L: 44" / 30"<br>
                &nbsp;&nbsp; XL: 48" / 31"<br>
                &nbsp;&nbsp; 2XL: 52"<br>
                • <b>สภาพ:</b> สินค้าใหม่ พร้อมส่งจาก กทม.`, link: 'https://s.shopee.co.th/5AnwMPmL5d'
    },
    {
        id: 4, category: 'Fashion', name: 'Fearless Fallen Angel เสื้อยืดแขนสั้น ทรง BOXY', price: '฿890',
        img: 'Fearless Fallen Angel เสื้อยืดแขนสั้น ทรง BOXY.webp',
        images: [
            'Fearless Fallen Angel เสื้อยืดแขนสั้น ทรง BOXY.webp',
            'Fearless Fallen Angel เสื้อยืดแขนสั้น ทรง BOXY2.webp',
            'Fearless Fallen Angel เสื้อยืดแขนสั้น ทรง BOXY3.webp'
        ],
        desc: `<b>Fallen Angel (สินค้าแท้จากแบรนด์)</b><br>
                "สัญลักษณ์ของการลุกขึ้นใหม่ หลังจากเคยพัง เคยหลงทาง"<br>
                เสื้อยืดทรง Boxy ดีไซน์ความหมายลึกซึ้ง ไม่ยอมแพ้ต่อโชคชะตา<br><br>
                • <b>วัสดุ:</b> Premium Cotton 100%<br>
                • <b>ไซส์ (รอบอก):</b><br>
                &nbsp;&nbsp; M: 42"<br>
                &nbsp;&nbsp; L: 46"<br>
                &nbsp;&nbsp; XL: 50"<br>
                • <b>สภาพ:</b> สินค้าใหม่ พร้อมส่งจาก กทม.`, link: 'https://shopee.co.th'
    },
];

const categories = ['All', ...new Set(products.map(p => p.category))];

const grid = document.getElementById('productGrid');
const catContainer = document.getElementById('categoryContainer');
const modal = document.getElementById('modalOverlay');

// Global variables for Modal Slideshow
let currentModalImages = [];
let currentModalIndex = 0;

// Initialize
function init() {
    // setupTheme(); // ปิดไว้ก่อนเนื่องจากยังไม่มีฟังก์ชันนี้
    renderCategories();
    renderProducts('All');
    startSlideshow();
}

// Render Category Buttons
function renderCategories() {
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${cat === 'All' ? 'active' : ''}`;
        btn.innerText = cat;
        btn.onclick = () => filterProducts(cat, btn);
        catContainer.appendChild(btn);
    });
}

// Render Products
function renderProducts(filter) {
    grid.innerHTML = '';
    const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);

    filtered.forEach(p => {
        // สร้าง HTML สำหรับรูปภาพหลายรูป (ถ้ามี)
        const imageList = p.images || [p.img]; // ถ้าไม่มี images ให้ใช้ img ตัวเดียว
        const imagesHtml = imageList.map((url, index) =>
            `<img src="${url}" class="card-img-slide ${index === 0 ? 'active' : ''}" alt="${p.name}">`
        ).join('');

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
                    <div class="card-img-wrapper" data-slide-index="0">
                        ${imagesHtml}
                    </div>
                    <div class="card-info">
                        <h3>${p.name}</h3>
                        <p>${p.category}</p>
                        <span class="price-tag">${p.price}</span>
                    </div>
                `;
        card.onclick = () => openModal(p);
        grid.appendChild(card);
    });
}

// Filter Logic
function filterProducts(cat, btnElement) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    renderProducts(cat);
}

// Slideshow Logic
function startSlideshow() {
    setInterval(() => {
        document.querySelectorAll('.card-img-wrapper').forEach(wrapper => {
            const slides = wrapper.querySelectorAll('.card-img-slide');
            if (slides.length > 1) {
                let currentIndex = parseInt(wrapper.getAttribute('data-slide-index') || 0);
                slides[currentIndex].classList.remove('active'); // ซ่อนรูปปัจจุบัน

                let nextIndex = (currentIndex + 1) % slides.length; // คำนวณรูปถัดไป
                slides[nextIndex].classList.add('active'); // แสดงรูปถัดไป

                wrapper.setAttribute('data-slide-index', nextIndex);
            }
        });
    }, 3000); // เปลี่ยนทุก 3000ms (3 วินาที)
}

// Modal Logic
function openModal(product) {
    // Setup images
    currentModalImages = product.images || [product.img];
    currentModalIndex = 0;
    updateModalImage();

    document.getElementById('modalTitle').innerText = product.name;
    document.getElementById('modalPrice').innerText = product.price;
    document.getElementById('modalDesc').innerHTML = product.desc; // ใช้ innerHTML เพื่อรองรับ <br> และ <b>
    document.getElementById('modalLink').href = product.link; // อัปเดตลิงก์ปุ่มซื้อ

    // Show/Hide buttons based on image count
    const navBtns = document.querySelectorAll('.modal-nav-btn');
    navBtns.forEach(btn => btn.style.display = currentModalImages.length > 1 ? 'flex' : 'none');

    modal.classList.add('active');
}

function changeModalImage(step) {
    currentModalIndex += step;
    if (currentModalIndex >= currentModalImages.length) currentModalIndex = 0;
    if (currentModalIndex < 0) currentModalIndex = currentModalImages.length - 1;
    updateModalImage();
}

function updateModalImage() {
    const imgElement = document.getElementById('modalImg');
    imgElement.style.opacity = '0'; // Add simple fade effect
    setTimeout(() => {
        imgElement.src = currentModalImages[currentModalIndex];
        imgElement.style.opacity = '1';
    }, 200);
}

function closeModal() {
    modal.classList.remove('active');
}

// Close on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
init();
