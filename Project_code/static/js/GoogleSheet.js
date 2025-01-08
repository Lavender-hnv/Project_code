// const scriptURL = 'https://script.google.com/macros/s/AKfycbxFGjBRIXok3u9sQuWQxLyTB8n8NPUqSJNEanCWg13hKu9ebB2JCzCyPw0aGiBV4b5wBQ/exec'

// const form = document.forms['contact-form']
// console.log(form)
// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! Form is submitted" ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// })

const scriptURL = 'https://script.google.com/macros/s/AKfycbxFGjBRIXok3u9sQuWQxLyTB8n8NPUqSJNEanCWg13hKu9ebB2JCzCyPw0aGiBV4b5wBQ/exec'

const form = document.forms['contact-form'];

// Kiểm tra nếu form không tồn tại
if (!form) {
  console.error('Form không tìm thấy. Đảm bảo form có name="contact-form"');
} else {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form) 
      });

      if (response.ok) {
        alert('Thank you! Form is submitted');
        window.location.reload();
      } else {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error!', error.message);
      alert('Something went wrong. Please try again later.');
    }
  });
}
