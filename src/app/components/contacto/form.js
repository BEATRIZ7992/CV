const $form = document.querySelector('#form')
$form.addEventListener('submit', handlesubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new formData(this)
    const respose = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'applications/json'
        }
    })


}