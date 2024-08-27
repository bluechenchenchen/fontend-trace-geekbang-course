type FingerprintOptions = {
    font?: string;
    reactStyle?: string | CanvasGradient | CanvasPattern;
    contentStyle?: string | CanvasGradient | CanvasPattern;
    textBaseline?: CanvasTextBaseline;
};
/**
 * 生成唯一ID（非用户ID）
 * 通过HTML5 Canvas API创建一个接近不重复的唯一指纹ID
 * @param content
 * @returns
 */
export declare const getFingerprintId: (content: string, options?: FingerprintOptions) => string;
export {};
