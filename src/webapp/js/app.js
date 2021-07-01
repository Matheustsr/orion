(function ($) {
    console.log('Hello', $);
    $(document).ready(() => {
        const listData = function () {
            $.get('http://localhost:3000/bills/', (result) => {
                console.log(result);
                $('#list_table tbody').empty();

                if (!result.data.length && !result.status) {
                    return;
                }

                result.data.forEach((bill) => {
                    const tmpl =
                        `${'<tr> ' + '	<td>'}${bill.title}</td> ` +
                        `	<td>${bill.price}</td> ` +
                        `	<td><a href="http://localhost:3000/address/${bill.cep}" target="_blank">${bill.cep}</a></td> ` +
                        `	<td> <button type="button" id="btn_delete" class="btn btn-danger btn-small" data-id=${bill._id}>Delete</button>`;
                    ('</tr> ');

                    $('#list_table tbody').append(tmpl);
                });
            });
        };

        const populateCategory = function () {
            $.get('http://localhost:3000/categories/', (result) => {
                if (!result.data.length && !result.status) {
                    return;
                }

                result.data.forEach((category) => {
                    const tmpl = `<option value="${category._id}"> ${category.name}</option>`;
                    $('#select_category').append(tmpl);
                });
            });
        };

        const createData = function () {
            const title = $('input[name="title"]').val();
            const price = $('input[name="price"]').val();
            const category = $('#select_category').val();
            const cep = $('input[name="cep"]').val();

            if (!title || !price || !category) {
                console.log('Invalid body');
                return;
            }

            $.post(
                'http://localhost:3000/bills/',
                { title, price, category, cep },
                (result) => {
                    // clear form
                    $('input[name="title"]').val('');
                    $('input[name="price"]').val('');
                    $('#select_category').val('');
                    $('input[name="cep"]').val('');

                    // list
                    listData();
                }
            );
        };

        const removeData = function () {
            const id = $(this).data('id');
            const url = `http://localhost:3000/bills/${id}`;
            $.ajax({
                url,
                type: 'DELETE',
                success(result) {
                    listData();
                },
            });
        };

        const createDataCat = function () {
            const name = $('input[name="name"]').val();

            if (!name) {
                console.log('Invalid body');
                return;
            }

            $.post('http://localhost:3000/categories/', { name }, (result) => {
                // clear form
                $('input[name="name"]').val('');
            });
        };

        listData();
        populateCategory();
        $('#btn_create').on('click', createData);
        $('#btn_create_cat').on('click', createDataCat);
        $('#list_table tbody').on('click', '#btn_delete', removeData);
    });
})(jQuery);
