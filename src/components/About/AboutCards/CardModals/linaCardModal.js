import React, { Component } from 'react';
import './cardModals.css';

// Close Icon
import { AiOutlineCloseCircle } from 'react-icons/ai';

// Images
import linaImg from '../../../../assets/lina.jpg';

const closeBtn = [
  {
    icon: <AiOutlineCloseCircle size={'3rem'} />,
  },
];

// James Modal
export default class LModal extends Component {
  render() {
    return (
      <div className="l-modal bg-blkRgba dark:bg-white">
        <div className="modal-btn-close-container">
          {closeBtn.map((close, index) => (
            <button
              type="button"
              className="modal-btn-close text-white dark:text-blk"
              onClick={this.props.hide}
            >
              {close.icon}
            </button>
          ))}
        </div>
        <div className="modal-card bg-white dark:bg-blk">
          <div class="modal-img-container">
            <img src={linaImg}></img>
          </div>
          <div className="modal-content">
            <div className="modal-details text-blk dark:text-white">
              <h4>Lina Choi</h4>
              <span>UX/UI Developer</span>
              <div className="modal-data">
                <div>
                  <h3>24</h3>
                  <span>Projects</span>
                </div>

                <div>
                  <h3>29</h3>
                  <span>Followers</span>
                </div>

                <div>
                  <h3>39</h3>
                  <span>Following</span>
                </div>
              </div>

              <div className="modal-action-btn">
                <a href="https://github.com/choilina16" target="_blank">
                  <button className="bg-blk text-white dark:bg-white dark:text-blk">
                    Follow GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
