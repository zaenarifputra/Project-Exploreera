import React,{useRef} from "react";
import './search-bar.css'
import { Col, Form, FormGroup} from "reactstrap";

const SeacrhBar = () => {

    const locationRef = useRef('')
    const distancenRef = useRef(0)
    const maxgroupSizeRef = useRef(0)

    const searchHandler = ()=>{

        const location = locationRef.current.value
        const distance = distancenRef.current.value
        const maxGroupSize = maxgroupSizeRef.current.value

        if(location=='' || distance=='' || maxGroupSize==''){
            return alert("All fields are required!")
        }
    }
    
    return <Col lg='12'>
        <div className="search_bar">
            <Form className="d-flex align-items-center gap-1">
                <FormGroup>
                    <span><i class="ri-map-pin-line"></i></span>
                    <div className="d-flex gap-3 form_group form_group-fast">
                        <h6>Lokasi</h6>
                        <input type="text" placeholder="Pergi Ke?" ref={locationRef}/>
                    </div>
                </FormGroup>
                <FormGroup>
                    <span><i class="ri-map-pin-time-line"></i></span>
                    <div className="d-flex gap-3 form_group form_group-fast">
                        <h6>Tujuan</h6>
                        <input type="number" placeholder="Tujuan k/m" ref={distancenRef}/>
                    </div>
                </FormGroup>
                <FormGroup>
                    <span><i class="ri-group-line"></i></span>
                    <div className="d-flex gap-3 form_group form_group-last">
                        <h6>Jumlah Maksmial</h6>
                        <input type="number" placeholder="0" ref={maxgroupSizeRef}/>
                    </div>
                </FormGroup>
                <span className="search_icon" type='submit' onClick={searchHandler}>
                <h5>Cari</h5>
                </span>
            </Form>
        </div>
    </Col>
};

export default SeacrhBar