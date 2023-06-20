export default function(duration: any) {
    const re = new RegExp(/^\d*\.?\d+(s|ms)$/)
    return re.test(duration)
}