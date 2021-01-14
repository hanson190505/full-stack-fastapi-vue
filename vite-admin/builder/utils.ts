export interface IViteEnv {
	VITE_PORT: number
	VITE_USE_MOCK: boolean
	VITE_USE_PWA: boolean
	VITE_PUBLIC_PATH: string
	VITE_PROXY: [string, string][]
	VITE_GLOB_APP_TITLE: string
	VITE_GLOB_APP_SHORT_NAME: string
	VITE_USE_CDN: boolean
	VIE_DROP_CONSOLE: boolean
	VITE_BUILD_GZIP: boolean
	VITE_DYNAMIC_IMPORT: boolean
	VITE_LEGACY: boolean
}

export function wrapperEnv(envConf: any): IViteEnv {
	const ret:any = {}
	for (const envName of Object.keys(envConf)){
		let realNmae = envConf[envName].replace(/\\n/g, '\n')
		realNmae = realNmae === 'true'?true: realNmae === 'false'? false : realNmae
		if (envName === 'VITE_PORT'){
			realNmae = Number(realNmae)
		}
		if (envName === 'VITE_PROXY'){
			try {
				realNmae = JSON.parse(realNmae)
			}catch (error){}
		}
		ret[envName] = realNmae
		process.env[envName] = realNmae
	}
	return ret
}