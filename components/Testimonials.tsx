export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-cyan rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-magenta rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-cyan/10 border border-electric-cyan/20 mb-6">
            <svg className="w-5 h-5 text-electric-cyan" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-electric-cyan font-semibold text-sm tracking-wide">TESTIMONIOS REALES</span>
          </div>
          
          <h2 className="heading-1 mb-6">
            Lo Que Dicen Nuestros
            <span className="block mt-2 bg-gradient-to-r from-electric-cyan via-neon-magenta to-sunset-orange bg-clip-text text-transparent">
              Clientes Satisfechos
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Historias reales de transformación y éxito con Leo Lombardo
          </p>
        </div>

        {/* Twitter Wall Layout - Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          
          {/* Testimonial 1 */}
          <div className="card-elevated group hover:scale-[1.02] transition-all duration-300 animate-slide-up p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-2 border-electric-cyan/20 hover:border-electric-cyan/40">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-cyan to-neon-magenta flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">María González</h3>
                <p className="text-sm text-slate-400">Emprendedora Digital</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-sunset-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed">
              "Transformó completamente mi negocio. Las estrategias de Leo son prácticas y efectivas. En 3 meses duplicamos nuestros ingresos."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="card-elevated group hover:scale-[1.02] transition-all duration-300 animate-slide-up p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-2 border-neon-magenta/20 hover:border-neon-magenta/40">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-magenta to-sunset-orange flex items-center justify-center text-white font-bold text-lg">
                J
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">Juan Pérez</h3>
                <p className="text-sm text-slate-400">CEO Tech Startup</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-sunset-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed">
              "La consultoría más valiosa que he recibido. Leo entiende el mercado digital como nadie. Resultados medibles desde el día uno."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="card-elevated group hover:scale-[1.02] transition-all duration-300 animate-slide-up p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-2 border-sunset-orange/20 hover:border-sunset-orange/40">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunset-orange to-electric-cyan flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">Sofía Martínez</h3>
                <p className="text-sm text-slate-400">Directora de Marketing</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-sunset-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed">
              "Increíble retorno de inversión. Las campañas diseñadas por Leo superaron todas nuestras expectativas. Altamente recomendado."
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="card-elevated group hover:scale-[1.02] transition-all duration-300 animate-slide-up p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-2 border-electric-cyan/20 hover:border-electric-cyan/40">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-cyan to-neon-magenta flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">Carlos Rodríguez</h3>
                <p className="text-sm text-slate-400">Fundador E-commerce</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-sunset-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed">
              "Pasamos de 0 a 100K en ventas mensuales. Su enfoque en conversión y optimización fue clave. Un verdadero experto."
            </p>
          </div>

          {/* Testimonial 5 */}
          <div className="card-elevated group hover:scale-[1.02] transition-all duration-300 animate-slide-up p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-2 border-neon-magenta/20 hover:border-neon-magenta/40">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-magenta to-sunset-orange flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">Laura Sánchez</h3>
                <p className="text-sm text-slate-400">Coach de Negocios</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-sunset-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed">
              "Leo no solo entiende de marketing, entiende de personas. Sus estrategias conectan emocionalmente con la audiencia."
            </p>
          </div>

          {/* Testimonial 6 */}
          <div className="card-elevated group hover:scale-[1.02] transition-all duration-300 animate-slide-up p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border-2 border-sunset-orange/20 hover:border-sunset-orange/40">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunset-orange to-electric-cyan flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">Diego Torres</h3>
                <p className="text-sm text-slate-400">Gerente de Ventas</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-sunset-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed">
              "Mejoramos nuestro embudo de ventas en un 300%. Las técnicas de Leo son probadas y funcionan. Vale cada centavo invertido."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}