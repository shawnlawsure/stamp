import $ from 'jquery';

const initialStamp = {
	id: null,
	denomination: '',
	description: '',
	year: '',
	color: '',
	image: null,
	image_type: '',
	has_image: false
};

const initialState = {
	list: [],
	stamp: initialStamp
  }

const stamp = (state, action) => {
	
	if (typeof state === 'undefined')
		return initialState;
	
	switch (action.type) {

		case 'SET_INITIALLIST':

			return {
				list: action.data,
				stamp: state.stamp
			};
	
		case 'SAVE_STAMP':

			let saveResult = saveStamp(action.data);
			if (saveResult)
			{
				var stamp = {
					id: saveResult,
					denomination: action.data.denomination,
					description: action.data.description,
					year: action.data.year,
					color: action.data.color,
					image: null,
					image_type: '',
					has_image: false					
				}

				if (action.data.save_file) {
					let saveImageResult = saveStampImage(action.data);
					if (!saveImageResult)
						console.log("An error occurred saving stamp image.")
					else
						stamp.has_image = true;
				}

				let newList = [
					...state.list.filter(item => item.id !== stamp.id),
					stamp
				];

				return {
					list: newList,
					stamp: initialStamp
				};

			}
			else
				alert("An error occurred saving data.");			

			break;

	  default:
		return state
	}
  };

  function saveStamp(stamp)
  {
	var result = null;

	$.ajax({
		url: "http://localhost:3000/stamp",
		type: "POST",
		data: JSON.stringify(stamp),
		async: false,
		//dataType: "html",
		contentType: 'application/json',
		success: function (data)
		{
			result = data;	
		},
		error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        }	
	});

	return result;

	/*$.ajax("http://localhost:3000/intake")
	.done((data, textStatus, jqXHR) => 
	{
		//let action = {type: 'SET_HOUSINGTYPES', data: data };
		//console.log(this.props.setHousingTypes)
		//this.props.setHousingTypes(data);
		//store.dispatch(action);
		//console.log("Data: " + data[0].ValueText);
		console.log("Success");		
	})
	.fail((jqXHR, textStatus, errorThrown) =>
	{
		console.log("Error: " + jqXHR.statusText);
	})*/
  }

  function saveStampImage(stamp)
  {
	var result = false;

	var formData = new FormData();
	formData.append("id", stamp.id);
	formData.append("file", stamp.file);

	$.ajax({
		url: "http://localhost:3000/stampimage",
		type: "POST",
		data: formData,
		async: false,
		contentType: false,
		processData: false,
		success: function (data)
		{
			result = data === "success";	
		},
		error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        }	
	});

	return result;
}

  export default stamp