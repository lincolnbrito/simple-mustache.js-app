<?php 

class Tdata{

	public $locations = array(
		array(
			"label" => "New York City",
			"country" => "US"
		),
		array(
			"label" => "East Boston",
			"country" => "US"
		),
		array(
			"label" => "Compton, Los Angeles",
			"country" => "US"
		),
		array(
			"label" => "Lisbon, Portugal",
			"country" => "PT"
		),
	);

}

echo json_encode(new Tdata());
 ?>