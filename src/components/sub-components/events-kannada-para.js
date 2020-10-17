import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../../actions/index';

const EventsKannadaPara  = props => {
  return (
    <div class="row">
    <div class="col-sm-12">
        <div class="head-wrap mt-4">
            <h1 class="head-line-01 text-center"> Events KannadaPara </h1>
            <p class="sub-head-para-01 text-center">Karnataka on the back of social media campaigns by Pro-Kannada activists who range across the ideological spectrum from the Left to the cultural Right.</p>
        </div>
    </div>
    <div class="col-sm-3 pr-sm-0">
        <div class="activist-box-wrap mt-3">
            <div class="img-wrap">
                <img class="img-fluid" src="image/KarnatakaHaveOwnFlag.jpg" alt="" />
                <div class="triangle-up"></div>
            </div>
            <div class="box-info">
                <h3 class="small-sub-head-01 mt-1">Mysuru, Karnataka</h3>
                <h3 class="small-head-01 mt-3">Why does India's Karnataka state want its own flag?</h3>

                <p class="box-para mt-3">The govenment in the southern Indian state of Karnataka recently set up a panel to explore if the state can have its own separate flag. The BBC explains why it has</p>
                <p class="time-punch mb-0 text-muted">July 19, 2017</p>
            </div>
        </div>
    </div>
    <div class="col-sm-3 px-sm-0">
        <div class="activist-box-wrap mt-3">
            <div class="box-info px-4">
                <h3 class="small-sub-head-01 mt-1">Bengaluru, Karntaka</h3>
                <h3 class="small-head-01 mt-3">India is not Hindia: Amit Shah's Hindi push Backfires</h3>

                <p class="box-para mt-3">On the occassion of Hindi Diwas, Union Home Minister and BJP president Amit Shah set the cat among the pigeons by suggesting that Hindi should become</p>
                <p class="time-punch mb-0 text-muted">Septembar 28, 2020</p>
            </div>
            <div class="img-wrap">
                <img class="img-fluid" src="image/Sept-14.jpg" alt="" />
                <div class="triangle-down"></div>
            </div>
        </div>
    </div>
    <div class="col-sm-3 px-sm-0">
        <div class="activist-box-wrap mt-3">
            <div class="img-wrap">
                <img class="img-fluid" src="image/HindiGottilla.jpg" alt="" />
                <div class="triangle-up"></div>
            </div>
            <div class="box-info px-4">
                <h3 class="small-sub-head-01 mt-1">Bengaluru, Karnataka</h3>
                <h3 class="small-head-01 mt-3">Hindi Gottilla : Sandalwood actors support campaign</h3>

                <p class="box-para mt-3">Kannada celebrities rallied together to voice out their opposition of Hindi imposition on September 14, which is celebrated as Hindi Diwas</p>
                <p class="time-punch mb-0 text-muted">September 14, 2019</p>
            </div>
        </div>
    </div>
    <div class="col-sm-3 pl-sm-0">
        <div class="activist-box-wrap mt-3">
            <div class="box-info px-4">
                <h3 class="small-sub-head-01 mt-1">Belagavi, Karntaka</h3>
                <h3 class="small-head-01 mt-3">Row over freedom fighter's statue turns into Kannadiga</h3>

                <p class="box-para mt-3">Many things happen in the city of Karntaka nowadays. Recently, tension prevailed at a village in Belagavi district bordering Maharashtra on Friday, with a section of</p>
                <p class="time-punch mb-0 text-muted">August 15, 2020</p>
            </div>
            <div class="img-wrap">
                <img class="img-fluid" src="image/SangolliRayannaStatue.jpg" alt="" />
                <div class="triangle-down"></div>
            </div>
        </div>
    </div>
    <div class="col-sm-12">
        <button type="button" class="btn btn-md btn-other mx-auto d-block mt-4">Load more</button>
    </div>
</div>
   );
  }

const mapDispatchToProps = {
  logIn
};
const mapStateToProps = state => ({

});


export default connect(mapStateToProps, mapDispatchToProps) (EventsKannadaPara);
