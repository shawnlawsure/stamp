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
	
		/*case 'INIT_STAMP':
			
		console.log("init stamp");

			var newStamp = initialStamp;
			if (action.id)
			{
				let stamp = state.list.find(function (item) { return item.id === action.id; });
				if (stamp) {
					newStamp = stamp;
					console.log(stamp.has_image + ' : ' + stamp.image_type);
					if (stamp.has_image && !stamp.image) {

						console.log('3');	

						console.log('here');						
						newStamp.image = getStampImage(action.id);

						console.log(newStamp.image);
					}
					console.log(stamp.image);
				}
				else
					console.log("Error: stamp " + action.id + " could not be found.");

			}
			
			return {
				list: state.list,
				stamp: newStamp
			};*/

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

				/*let stamp = newList.find(function (item) { return item.id === saveResult; });
				if (stamp)
					return {
						list: newList,
						stamp: stamp
					};
				else
					alert("Error: stamp " + action.id + " could not be found.");*/

			}
			//else
			//	alert("An error occurred saving data.");			

			break;

		/*case 'ADD_TODO':
			return [
			...state,
			{
				id: action.id,
				text: action.text,
				completed: false
			}
			]
		case 'TOGGLE_TODO':
			return state.map(todo =>
			todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
			)*/

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