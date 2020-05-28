import React from 'react';

class Filters extends React.Component {


	render() {

		const { value, handleChange, handleClick, isClicked} = this.props;
		return (
			<div data-testid="filters"className="container">
			<section className="filters">
				<div className="filters__search">
					<input type="text" className="filters__search__input" value={ value }  placeholder="Pesquisar" onChange={ handleChange } />

					<button className="filters__search__icon">
						<i className="fa fa-search"/>
					</button>
				</div>

				<button className= {isClicked === "name" ? "filters__item is-selected" : "filters__item" } onClick={() => handleClick("name")}>
					Nome <i className="fas fa-sort-down" />
				</button>

				<button className={isClicked === "country" ? "filters__item is-selected" : "filters__item" }onClick={() => handleClick("country")}>
					País <i className="fas fa-sort-down" />
				</button>

				<button className={isClicked === "company" ? "filters__item is-selected" : "filters__item" } onClick={() => handleClick("company")}>
					Empresa <i className="fas fa-sort-down" />
				</button>

				<button className={isClicked === "department" ? "filters__item is-selected" : "filters__item" } onClick={ () => handleClick("department") }>
					Departamento <i className="fas fa-sort-down" />
				</button>

				<button className={isClicked === "admissionDate" ? "filters__item is-selected" : "filters__item" }onClick={() => handleClick("admissionDate") }>
					Data de admissão <i className="fas fa-sort-down" />
				</button>
			</section>
		</div>

		);
	}
}

export default Filters;
