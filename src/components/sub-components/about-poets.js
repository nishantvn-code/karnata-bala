import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';
class AboutPoets extends React.Component {


  render() {
  return (
    <div class="container-fluid kannada-poet-containter mt-3 py-4">
    <div class="row">
        <div class="col-sm-12">
            <div class="head-wrap my-2">
                <h1 class="head-line-01 text-center"> Social media KannadaPara </h1>
                <p class=" text-center sub-head-para-01 mb-4">Karnataka on the back of social media campaigns by Pro-Kannada activists who range across the idological spectrum from the Left to the cultural right.</p>
            </div>
            <div class="item">
                <ul id="content-slider" class="content-slider">
                    <li class="card poet-card">
                        <div class="poet-img-warp">
                            <img src="image/GovindaPai.jpg" class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mb-0">M Govinda Pai</h5>
                            <p class="award">Rastra Kavi</p>
                            <p class="card-text">He was awarded the first Rashtrakavi title by the Madras Governament (Kasaragod district was part of South</p>
                            <p class="card-btn"><a class="btn btn-sm btn-ok btn-ok"  href="https://g.co/kgs/AqDbmQ" target="_blank" >More</a></p>
                        </div>
                    </li>
                    <li class="card poet-card">
                        <div class="poet-img-warp">
                            <img src="image/Kuvempu.jpg" class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mb-0">Kuvemu</h5>
                            <p class="award">Rastra Kavi</p>
                            <p class="card-text">Kuppali Venkatappa Puttappa popularly known by his pen name Kuvempu novelist, poet, playwright, and critic.</p>
                            <p class="card-btn"><a class="btn btn-sm btn-ok" href="https://g.co/kgs/oYAFjn" target="_blank">More</a></p>
                        </div>
                    </li>
                    <li class="card poet-card">
                        <div class="poet-img-warp">
                            <img src="image/DaRaBendre.jpg" class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mb-0">Da Ra Bendre</h5>
                            <p class="award">Jnanapith Award</p>
                            <p class="card-text">Dattatreya Ramachandra Bendre, popularly known as Da. Ra Bendre, was a Kannada poet of the Navodaya</p>
                            <p class="card-btn"><a class="btn btn-sm btn-ok" href="https://g.co/kgs/AVbjhQ" target="_blank">More</a></p>
                        </div>
                    </li>
                    <li class="card poet-card">
                        <div class="poet-img-warp">
                            <img src="image/KSNissar.jpg" class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mb-0">K.S. Nissar Ahmed</h5>
                            <p class="award">Nityostava Poet</p>
                            <p class="card-text">Kokkare Hosahalli Shekh Haider Nissar Ahmed, known as K.S. Nissar Ahmed, was an Indian poet and writer in</p>
                            <p class="card-btn"><a class="btn btn-sm btn-ok" href="https://g.co/kgs/51CjeY" target="_blank">More</a></p>
                        </div>
                    </li>
                    <li class="card poet-card">
                        <div class="poet-img-warp">
                            <img src="image/shivarama-karanth.jpeg" class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mb-0">Shivarama Karanth</h5>
                            <p class="award">Jnanapeeta Awardee</p>
                            <p class="card-text">A novelist in Kannada, & an ecological conservationist. Ramachandra Guha called him the "Rabindranath Tagore</p>
                            <p class="card-btn"><a class="btn btn-sm btn-ok" href="https://g.co/kgs/x9Rwg9" target="_blank">More</a></p>
                        </div>
                    </li>
                    <li class="card poet-card">
                        <div class="poet-img-warp">
                            <img src="image/gs-shivarudrappa.jpg" class="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mb-0">G.S. Shivarudrappa</h5>
                            <p class="award">Rastra Kavi</p>
                            <p class="card-text">Indian Kannada poet, writer and researcher who was awarded the title of Rashtrakavi by the GoK</p>
                            <p class="card-btn"><a class="btn btn-sm btn-ok" href="https://g.co/kgs/umKYt3" target="_blank">More</a></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
   );
  }
  }

const mapDispatchToProps = {
  logIn
};
const mapStateToProps = state => ({

});


export default connect(mapStateToProps, mapDispatchToProps) (AboutPoets);
