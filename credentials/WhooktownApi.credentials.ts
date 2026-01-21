import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class WhooktownApi implements ICredentialType {
	name = 'whooktownApi';
	displayName = 'Whooktown API';
	documentationUrl = 'https://whooktown.com/docs/api';
	icon = { light: 'file:whooktown.svg', dark: 'file:whooktown.dark.svg' } as const;

	properties: INodeProperties[] = [
		{
			displayName: 'API URL',
			name: 'apiUrl',
			type: 'string',
			default: 'https://sensor.whooktown.com',
			placeholder: 'https://sensor.example.com',
			description: 'URL of the Whooktown sensor-endpoint',
		},
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Token with sensor:w role',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.apiUrl}}',
			url: '/_health',
		},
	};
}
