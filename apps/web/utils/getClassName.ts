type GetClassNameFunc = (apply: boolean | undefined, className: string) => string;

export const cn: GetClassNameFunc = (apply, className ) => apply ? className : '';