import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const RepositoriesForm = () => {

    return (
        <form className="card card-body">

            <div className="form-group input-group p-2">
                <div className="input-group-text bg-light">
                    <FontAwesomeIcon icon={faLink} />
                </div>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="url"
                    name="url"
                />
            </div>

            <div className="form-group input-group p-2">
                <div className="input-group-text bg-light">
                    <FontAwesomeIcon icon={faPlusSquare} />
                </div>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Repositorio"
                    name="name"
                />
            </div>

            <div className="form-group p-2">
                <textarea name="description" rows="3" className="form-control" placeholder="Agrega una descripción"></textarea>
            </div>

            <button className="btn btn-primary btn-block">
                Guardar
            </button>
            
        </form>
    )


}

export default RepositoriesForm;