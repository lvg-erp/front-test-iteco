import React from "react";

export function Order() {
    return (
        <>
            <div className="content-container">
                <div className="content custom-scrollbar__table">
                    <div className="contentHeader">
                        <div className="contentHeader__left-card">
                            <h2 className="contentHeader__title"> Заявки </h2>
                            <div className="contentHeader__count" id="${locationPortal}-counter"> Всего&nbsp;1324 </div>
                        </div>
                        <div className="contentHeader__sort globalSelect" id="">
                            <div className="globalSelect__text" id="OrderBy" data-sort="OrderDirection"> По номеру <span className="dataASK" /></div>
                            <div className="globalSelect__wrapper">
                                <div className="globalSelect__wrapper__item ${locationPortal}-sort-item" data-direction="0" data-orderBy="OrderStatus"> По статусу <span className="dataASK"></span></div>
                                <div className="globalSelect__wrapper__item ${locationPortal}-sort-item" data-direction="1" data-orderBy="OrderStatus"> По статусу <span className="dataDESK"></span></div>
                            </div>
                        </div>
                        <div className="contentHeader__right filter-btn-js"> Фильтры </div>
                        <div className="filters custom-scrollbar__menu active-filters animate__animated"></div>
                    </div>
                    <div className="thead">
                        <div className="thead__item col-1 tableBold"> Статус </div>
                        <div className="thead__item col-2 tableBold"> Груз </div>
                        <div className="thead__item col-3 tableBold"> Номер машины </div>
                        <div className="thead__item col-1 tableBold"> Номер прицепа </div>
                    </div>

                    <ul className="table"></ul>
                </div>
            </div>
            <div className="content card custom-scrollbar__table">
                <div className="contentHeader">
                    <div className="contentHeader__left-card">
                        <div className='returnList'></div>
                        <h2 className="contentHeader__title"> Заявка </h2>
                        <div className="contentHeader__count" id="${locationPortal}-counter"> №&nbsp; </div>
                    </div>
                </div>
                <div className="card-content"></div>
            </div>
        </>
    )
} 