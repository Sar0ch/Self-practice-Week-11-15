//อาจารย์แนะนำเรื่อง dialog เลยกลับมาลองดูตอนทำ project เรื่อง dialog เพราะค่อยข้างเละเทะมากกกกกก ที่พอไปรอดก็ประมาณนี้
//อาจารย์แนะนำให้สร้าง function ขึ้นมาใหม่เลยแต่ยังทำไม่เสร็จ สำหรับเก็บ dialog จะได้ไม่ต้องกระจายอยู่ใน .js บ้าง .html บ้างจะได้เรียกใช้ง่ายๆ และเป็นระเบียบ

function showDialog(message, onClose = null) {
  const overlay = document.getElementById("dialogOverlay");
  const dialogMessage = document.getElementById("dialogMessage");
  const okBtn = document.getElementById("dialogOkBtn");

  dialogMessage.textContent = message;
  overlay.style.display = "flex";

  okBtn.onclick = () => {
    overlay.style.display = "none";
    if (onClose) onClose();
  };
}
