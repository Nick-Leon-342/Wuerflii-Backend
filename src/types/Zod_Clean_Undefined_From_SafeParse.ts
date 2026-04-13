

export function zod_clean_undefined_from_safeparse<T extends object>(obj: T): T {
	return Object.fromEntries(
		Object.entries(obj).filter(([_, v]) => v !== undefined)
	) as T
}
