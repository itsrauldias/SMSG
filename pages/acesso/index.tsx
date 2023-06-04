import Image from "next/image";
import { useState } from "react"

import logo from '../../lib/images/logow.png';

export default function Acesso() {

    const [tipoAcesso, setTipoAcesso] = useState<any>(0);

    if (tipoAcesso == 0) {
        return (
            <>
                <div className="bg-body-tertiary" style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center py-4">
                            <main className="form-signin w-100 m-auto">
                                {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                                <Image src={logo} height={72} alt="logo" style={{ borderRadius: '15px' }} />

                                <select onChange={(e) => setTipoAcesso(e.target.value)} className="form-control mt-2 mb-2" style={{ backgroundColor: 'transparent', border: 'none' }}>
                                    <option value="0" selected>Acesso</option>
                                    <option value="1">Acesso administrativo</option>
                                </select>

                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Login" />
                                    <label>Login</label>
                                </div>
                                <div className="form-floating mt-1">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                                    <label>Senha</label>
                                </div>

                                <div className="form-check text-start my-3">
                                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                    <label className="form-check-label">
                                        Lembrar minha senha
                                    </label>
                                </div>
                                <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>
                            </main>
                        </div>
                    </div>
                </div>
            </>
        )
    } else if (tipoAcesso == 1) {
        return (
            <div className="bg-body-tertiary" style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
                <div className="col-md-4">
                    <div className="d-flex align-items-center py-4">
                        <main className="form-signin w-100 m-auto">
                            {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                            <Image src={logo} height={72} alt="logo" style={{ borderRadius: '15px' }} />

                            <select onChange={(e) => setTipoAcesso(e.target.value)} className="form-control mt-2 mb-2" style={{ backgroundColor: 'transparent', border: 'none' }}>
                                <option value="0">Acesso</option>
                                <option value="1" selected>Acesso administrativo</option>
                            </select>

                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Login" />
                                <label>Login</label>
                            </div>
                            <div className="form-floating mt-1">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                                <label>Senha</label>
                            </div>

                            <div className="form-check text-start my-3">
                                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label className="form-check-label">
                                    Lembrar minha senha
                                </label>
                            </div>
                            <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}