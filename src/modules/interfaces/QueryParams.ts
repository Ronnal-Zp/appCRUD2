import { ParsedQs } from 'qs'

export interface QueryParams extends ParsedQs {
    limit?: string;
    offset?: string;
}