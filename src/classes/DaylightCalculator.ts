export class DaylightCalculator {
    public static parseTime (period: string, time: string): { hours: number, minutes: number } {
        // eslint-disable-next-line prefer-const
        let [hours, minutes] = time.split(':').map(Number)
        if (period === 'PM' && hours !== 12) {
            hours += 12
        } else if (period === 'AM' && hours === 12) {
            hours = 0
        }
        return { hours, minutes }
    }

    public static calculateDaylightTime (sunrise: { period: string, time: string }, sunset: { period: string, time: string }): string {
        const sunriseTime = this.parseTime(sunrise.period, sunrise.time)
        const sunsetTime = this.parseTime(sunset.period, sunset.time)

        const sunriseDate = new Date()
        sunriseDate.setHours(sunriseTime.hours, sunriseTime.minutes, 0, 0)

        const sunsetDate = new Date()
        sunsetDate.setHours(sunsetTime.hours, sunsetTime.minutes, 0, 0)

        const daylightMilliseconds = sunsetDate.getTime() - sunriseDate.getTime()
        const daylightMinutes = daylightMilliseconds / 60000
        const daylightHours = Math.floor(daylightMinutes / 60)
        const remainingMinutes = Math.round(daylightMinutes % 60)

        //TODO translate h and m.
        return `${daylightHours} h ${remainingMinutes} m`
    }
}
