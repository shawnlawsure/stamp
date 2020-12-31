import $ from 'jquery';

export function getStampImage(id)
  {
	var result = null;
	
	$.ajax({
		url: "http://localhost:3000/stampimage",
		type: "GET",
		data: { id: id },
		async: false,
		//dataType: "html",
		contentType: 'application/json',
		success: function (data)
		{
			result = data.image;	
		},
		error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        }	
	});

	return result;
  }