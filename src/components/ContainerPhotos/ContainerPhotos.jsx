import PhotoCard from "../PhotoCard/PhotoCard";

const  ContainerPhotos = ({title, count}) => {

	const imageURL = "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE50wGi?ver=09b6&q=90&m=6&h=454&w=808&b=%23FFFFFFFF&l=f&o=t&aim=true"

	const productsData = [{id:1,name:"DELL"}, {id:2,name:"HP"}, {id:3,name:"LG"}, {id:4,name:"ASUS"}]

	return <div className="container-fluid tm-container-content tm-mt-60">
	<div className="row mb-4">
	  <h2 className="col-6 tm-text-primary">{title} {count}</h2>
	  <div className="col-6 d-flex justify-content-end align-items-center">
		<form action="" className="tm-text-primary">
		  Page{" "}
		  <input
			type="text"
			value="1"
			size="1"
			className="tm-input-paging tm-text-primary"
		  />{" "}
		  of 200
		</form>
	  </div>
	</div>
	<div className="row tm-mb-90 tm-gallery">
	 {/* {
		productsData.map(({id,name}) => {
			return (
					<PhotoCard key={id} productImage={imageURL} name={name} date="15/2/2023" />
			)
		})
	 } */}

	 <PhotoCard productImage={imageURL}  date="15/2/2023"/>
	</div>
	<div className="row tm-mb-90">
	  <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
		<a href="/" className="btn btn-primary tm-btn-prev mb-2 disabled">
		  Previous
		</a>
		<div className="tm-paging d-flex">
		  <a href="/" className="active tm-paging-link">
			1
		  </a>
		  <a href="/" className="tm-paging-link">
			2
		  </a>
		  <a href="/" className="tm-paging-link">
			3
		  </a>
		  <a href="/" className="tm-paging-link">
			4
		  </a>
		</div>
		<a href="/" className="btn btn-primary tm-btn-next">
		  Next Page
		</a>
	  </div>
	</div>
  </div>;
};

export default ContainerPhotos;
