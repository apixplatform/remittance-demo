/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
	id: string;
}

declare var KTMenu: any;
declare var KTOffcanvas: any;
declare var KTScrolltop: any;
declare var KTHeader: any;
declare var KTToggle: any;
declare var KTUtil: any;
declare var KTPortlet: any;
declare var KTDialog: any;
declare var KTWizard: any;
declare var Chart: any;

declare module 'api-config.json' {
	const apix: any;
	const smartbank: any;
	const dashboard: any;
	const mambu: any;
	const remitOnline: any;
	const icf: any;
    export {apix, smartbank, dashboard, mambu, remitOnline, icf};
}