$(document).ready(function() {
    $("#example1").DataTable({
        "responsive": true,
        "lengthChange": false,
        "pageLength": 3,
        "autoWidth": false,
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

    let editar = document.querySelectorAll('.editar')


    for (let i = 0; i < editar.length; i++) {
        editar[i].addEventListener('click', (e) => {
            e.preventDefault()

            let dato = e.path[0].dataset.e;
            const { value: formValues } = Swal.fire({
                title: 'Editar',
                html: `<input id="swal-input1" class="swal2-input" value="${dato}">`,
                focusConfirm: false,
                preConfirm: () => {
                    return [
                        document.getElementById('swal-input1').value,
                    ]
                }
            })
        })

    }



});