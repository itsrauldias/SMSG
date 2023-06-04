import Image from "next/image";

import milho from '../../lib/images/produtos/milho.png';
import pacoquinha from '../../lib/images/produtos/pacoquinha.png';
import pinhao from '../../lib/images/produtos/pinhao.png';

export default function ScrollableItemList() {
    return (<>
        <div className="scrollable-list">
            <ul>
                <li>
                    <div className="item">
                        <Image className="card-img-top" src={milho} alt="produto" style={{ height: '80px', borderRadius: '50px' }} />
                        <p>Milho</p>
                    </div>
                </li>
                <li>
                    <div className="item">
                        <Image className="card-img-top" src={pacoquinha} alt="produto" style={{ height: '80px', borderRadius: '50px' }} />
                        <p>Paçoquinha</p>
                    </div>
                </li>
                <li>
                    <div className="item">
                        <Image className="card-img-top" src={pinhao} alt="produto" style={{ height: '80px', borderRadius: '50px' }} />
                        <p>Pinhão</p>
                    </div>
                </li>
            </ul>
        </div>
    </>
    )
}
