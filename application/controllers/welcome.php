<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function index()
    {
        $this->load->view('body.html');
    }

    public function test(){
        $this->load->view('demo.html');
    }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */


