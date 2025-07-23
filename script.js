document.addEventListener('DOMContentLoaded', () => {
  const forgiveButton = document.getElementById('forgive-button');
  const finalMessage = document.getElementById('final-message');

  forgiveButton.addEventListener('click', () => {
      // ซ่อนปุ่ม
      forgiveButton.style.display = 'none';

      // แสดงข้อความขอบคุณ
      finalMessage.classList.remove('hidden');

      // สร้างเอฟเฟกต์หัวใจลอย
      createHearts();
  });
});

function createHearts() {
  const container = document.body;
  setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3-5 seconds
      heart.innerText = '❤️';
      container.appendChild(heart);

      setTimeout(() => {
          heart.remove();
      }, 5000); // Remove heart after 5 seconds
  }, 300);
}

// เพิ่ม CSS สำหรับหัวใจใน JS เพื่อความสะดวก
const style = document.createElement('style');
style.innerHTML = `
.heart {
  position: fixed;
  top: -1vh;
  font-size: 2rem;
  transform: translateY(0);
  animation: fall linear infinite;
  z-index: 9999;
  opacity: 0.7;
}

@keyframes fall {
  to {
      transform: translateY(105vh);
      opacity: 0;
  }
}
`;
document.head.appendChild(style);
// ⭐ เพิ่ม Event Listener ทั้ง mouseover และ click ⭐
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);
