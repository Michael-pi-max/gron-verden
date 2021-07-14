import React from 'react';

const ShopStat = (props) => {
    return (
        <section className="counterSec container pt-10">
            <div className="row">
                <div className="col-12">
                    <ul className="progressCounter list-unstyled mb-2 d-flex flex-wrap text-capitalize text-center">
                        <li className="mb-md-0 mb-3">
                            <strong className="d-block fwEbold counter mb-2">0</strong>
                            <strong className="d-block text-uppercase txtWrap">Total Plants</strong>
                        </li>
                        <li className="mb-md-0 mb-3">
                            <strong className="d-block fwEbold counter mb-2">0</strong>
                            <strong className="d-block text-uppercase txtWrap">Total sell</strong>
                        </li>
                        <li className="mb-md-0 mb-3">
                            <strong className="d-block fwEbold counter mb-2">22</strong>
                            <strong className="d-block text-uppercase txtWrap">Happy Customers</strong>
                        </li>
                        <li className="mb-md-0 mb-3">
                            <strong className="d-block fwEbold counter mb-2">0</strong>
                            <strong className="d-block text-uppercase txtWrap">Milestone</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ShopStat;