import React from 'react';

function Footer(props) {
    return (
        <div style={{backgroundImage: "url('http://landing.engotheme.com/html/hamadryad/demo/images/background/bg-footer.jpg')", color: "#fff"}}>
			<aside className="footerHolder container-fluid overflow-hidden px-xl-20 px-lg-14 pt-xl-12 pb-xl-8 pt-lg-12 pt-md-8 pt-10 pb-lg-8">
				<div className="d-flex flex-wrap flex-lg-nowrap">
					<div className="coll-1 pr-3 mb-sm-4 mb-3 mb-lg-0">
						<h3 className="headingVI fwEbold text-uppercase mb-7" style={{color: "#fff"}}>Contact Us</h3>
						<ul className="list-unstyled footerContactList mb-3">
							<li className="mb-3 d-flex flex-nowrap"><span className="icon icon-place mr-3"  style={{color: "#aaaaaa"}}></span> <address className="fwEbold m-0" style={{color: "#aaaaaa"}}>Address: London Oxford Street, 012 United Kingdom.</address></li>
							<li className="mb-3 d-flex flex-nowrap"><span className="icon icon-phone mr-3"  style={{color: "#aaaaaa"}}></span> <span className="leftAlign"  style={{color: "#aaaaaa"}}>Phone : <a href="javascript:void(0);"  style={{color: "#aaaaaa"}}>(+032) 3456 7890</a></span></li>
							<li className="email d-flex flex-nowrap"><span className="icon icon-email mr-2" style={{color: "#aaaaaa"}}></span> <span className="leftAlign"  style={{color: "#aaaaaa"}}>Email:  <a href="javascript:void(0);"  style={{color: "#aaaaaa"}}>Botanicalstore@gmail.com</a></span></li>
						</ul>
						<ul className="list-unstyled followSocailNetwork d-flex flex-nowrap">
							<li className="fwEbold mr-xl-11 mr-sm-6 mr-4"  style={{color: "#aaaaaa"}}>Follow  us:</li>
							<li className="mr-xl-6 mr-sm-4 mr-2"><a href="javascript:void(0);" className="fab fa-facebook-f"></a></li>
							<li className="mr-xl-6 mr-sm-4 mr-2"><a href="javascript:void(0);" className="fab fa-twitter"></a></li>
							<li className="mr-xl-6 mr-sm-4 mr-2"><a href="javascript:void(0);" className="fab fa-pinterest"></a></li>
							<li className="mr-2"><a href="javascript:void(0);" className="fab fa-google-plus-g"></a></li>
						</ul>
					</div>
					<div className="coll-2 mb-sm-4 mb-3 mb-lg-0">
						<h3 className="headingVI fwEbold text-uppercase mb-6" style={{color: "#fff"}}>Information</h3>
						<ul className="list-unstyled footerNavList">
							<li className="mb-1"><a href="javascript:void(0);"  style={{color: "#aaaaaa"}}>New Products</a></li>
							<li className="mb-2"><a href="javascript:void(0);"  style={{color: "#aaaaaa"}}>Top Sellers</a></li>
							<li className="mb-2"><a href="javascript:void(0);"  style={{color: "#aaaaaa"}}>Our Blog</a></li>
							<li className="mb-2"><a href="javascript:void(0);"  style={{color: "#aaaaaa"}}>About Our Shop</a></li>
							<li><a href="javascript:void(0);"  style={{color: "#aaaaaa"}}>Privacy policy</a></li>
						</ul>
					</div>
					<div className="coll-3 mb-sm-4 mb-3 mb-lg-0">
						<h3 className="headingVI fwEbold text-uppercase mb-6" style={{color: "#fff"}}>My Account</h3>
						<ul className="list-unstyled footerNavList">
							<li className="mb-1"><a href="javascript:void(0);"  style={{color: "#aaaaaa"}}>My account</a></li>
							<li className="mb-2"><a href="javascript:void(0);"  style={{color: "#aaaaaa"}}>Discount</a></li>
							<li className="mb-2"><a href="javascript:void(0);"  style={{color: "#aaaaaa"}}>Orders history</a></li>
							<li><a href="javascript:void(0);"  style={{color: "#aaaaaa"}}>Personal information</a></li>
						</ul>
					</div>
					<div className="coll-4 mb-sm-4 mb-3 mb-lg-0">
						<h3 className="headingVI fwEbold text-uppercase mb-7 pl-xl-14 pl-lg-10" style={{color: "#fff"}}>Popular Tag</h3>
						<ul className="list-unstyled tagNavList d-flex flex-wrap justify-content-lg-end mb-0">
							<li className="text-center mb-2 mr-2"><a href="javascript:void(0);" className="md-round d-block py-2 px-2"  style={{color: "#aaaaaa"}}>Trend</a></li>
							<li className="text-center mb-2"><a href="javascript:void(0);" className="md-round d-block py-2 px-2"  style={{color: "#aaaaaa"}}>Decor</a></li>
							<li className="text-center mb-2 mr-2"><a href="javascript:void(0);" className="md-round d-block py-2 px-2" style={{color: "#aaaaaa"}}>Plant</a></li>
							<li className="text-center mb-2"><a href="javascript:void(0);" className="md-round d-block py-2 px-2" style={{color: "#aaaaaa"}}>Table tree</a></li>
							<li className="text-center mb-2 mr-2"><a href="javascript:void(0);" className="md-round d-block py-2 px-2" style={{color: "#aaaaaa"}}>Bedroom tree</a></li>
							<li className="text-center mb-2"><a href="javascript:void(0);" className="md-round d-block py-2 px-2" style={{color: "#aaaaaa"}}>Living room</a></li>
						</ul>
					</div>
				</div>
			</aside>
            {/* footer */}
            <footer id="footer" className="container-fluid overflow-hidden px-lg-20">
                <div className="copyRightHolder text-center pt-lg-5 pb-lg-4 py-3">
                    <p className="mb-0">Coppyright 2019 by <a href="javascript:void(0);">Botanical Store</a> - All right reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;