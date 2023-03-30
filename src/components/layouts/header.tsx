import React from "react";

type data = {
  c_headerLogo: any;
  c_headerTopMenus: any;
  c_headerMainMenus: any;
};

const Header = (props: data) => {
  const { c_headerLogo, c_headerTopMenus, c_headerMainMenus } = props;

  // console.log("c_headerLogo", c_headerLogo);

  return (
    <>
      <div className="Header" id="Header" data-ya-scope="header">
        <div className="Header-wrapper">
          <div className="Header-container">
            <div className="Header-main Header-main--right">
              <nav className="Header-menuMain">
                <div className="Header-content">
                  <div className="Header-menu Header-menu--topContainer">
                    <div className="Header-logoWrapper Header-logoWrapper--centered Header-desktopLogo">
                      <a className="Header-logoLink" href="#">
                        <img
                          className="Header-logoImage"
                          src={c_headerLogo.url}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="flex gap-6">
                      
                          {c_headerTopMenus.topMenu?.map((data: any) => {
                            return (
                              <>
                               <div> <a className="Header-link--top">
                                  <span className="Header-linkText">
                                    {data?.label}
                                  </span>
                                </a></div>
                              </>
                            );
                          })}
                        
                    </div>

                    
                  </div>
                 
                    <div className="flex gap-11 ml-[44%]">
                      
                          {c_headerMainMenus?.mainMenu.map((data: any) => {
                            return <><div>{data?.label}</div></>;
                          })}
                       
                      </div>
                    </div>
                
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
