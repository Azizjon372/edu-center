function submitApplication(e){
  e.preventDefault();

  const form = e.target;
  const name = form.querySelector('input[type="text"]').value.trim();
  const phone = form.querySelector('input[type="tel"]').value.trim();
  const msg = form.nextElementSibling;

  if(name.length < 2 || phone.length < 9){
    msg.textContent = "Iltimos, to‘liq ma’lumot kiriting";
    msg.style.color = "red";
    return;
  }

  // demo feedback
  msg.textContent = `Ariza qabul qilindi: ${name}, ${phone}`;
  msg.style.color = "#38bdf8";

  // clear inputs
  form.reset();

  // realda backend API yoki WhatsApp link ishlatiladi
  // misol:
  // window.open(`https://wa.me/998901234567?text=Salom, mening ismim ${name}, raqamim: ${phone}`);
}
function submitApplication(e){
  e.preventDefault();

  const form = e.target;
  const name = form.querySelector('input[type="text"]').value.trim();
  const phone = form.querySelector('input[type="tel"]').value.trim();
  const msg = form.nextElementSibling;

  if(name.length < 2 || phone.length < 9){
    msg.textContent = "Iltimos, to‘liq ma’lumot kiriting";
    msg.style.color = "red";
    return;
  }

  // WhatsApp link yaratish
  const myNumber = "998931561332"; // Sizning WhatsApp raqamingiz
  const text = `Salom, mening ismim ${name}, raqamim: ${phone}`;
  const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(text)}`;

  // WhatsApp ochish
  window.open(url, "_blank");

  // Feedback xabar
  msg.textContent = `Ariza yuborildi! WhatsApp orqali ochildi.`;
  msg.style.color = "#38bdf8";

  // Formani tozalash
  form.reset();
}
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
function submitApplication(e){
  e.preventDefault();

  const form = e.target;
  const name = form.querySelector('input[type="text"]').value.trim();
  const phone = form.querySelector('input[type="tel"]').value.trim();

  if(name.length < 2 || phone.length < 9){
    alert("Iltimos, to‘liq ma’lumot kiriting");
    return;
  }

  const text = `📝 Yangi ariza!\n\n👤 Ism: ${name}\n📞 Tel: ${phone}`;

  // bu yerga O'ZINGNI raqamingni yozasan
  const adminPhone = "998931561332"; 

  const url = `https://wa.me/${adminPhone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
}
function scrollToApplication(){
  const el = document.getElementById("application");
  el.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
