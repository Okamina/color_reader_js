export function validateColor(value){
		
		const hexType = /^#([a-f\d]{3}|[a-f\d]{6})$/;
        const hslType = /^hsl\((\d{1,3})\,(\d{1,3})\%\,(\d{1,3})\%\)$/i;
        const rgbType = /^rgb\((\d{1,3})\,(\d{1,3})\,(\d{1,3})\)$/i;

        return hexType.test(value) || hslType.test(value) || rgbType.test(value)
	}