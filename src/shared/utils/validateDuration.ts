export default function(duration: string) {
    const re = new RegExp(/^\d*\.?\d+(s|ms)$/)
    return re.test(duration)
}