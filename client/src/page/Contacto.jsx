import React, { useState } from "react";
import emailjs from "emailjs-com";
import { 
  Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, AlertCircle 
} from "lucide-react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // 🔄 Atualiza os campos
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📧 Envio do formulário via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ⚙️ parâmetros que coincidem com o template do EmailJS
    const templateParams = {
      username: formData.nome,
      email: formData.email,
      telefone: formData.telefone || "Não informado",
      assunto: formData.assunto,
      message: formData.mensagem,
      time: new Date().toLocaleString("pt-PT"),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitStatus("success");
        setFormData({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      details: ["+258 84 431 4455", "+258 87 431 4455"],
      description: "Disponível das 8h às 18h",
      color: "bg-green-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["ali.azimo@northweb.com", "info@northweb.com"],
      description: "Respondemos em até 24h",
      color: "bg-blue-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      details: ["Moçambique", "Região Norte"],
      description: "Atendimento remoto e presencial",
      color: "bg-purple-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      details: ["Segunda - Sexta: 8h-18h", "Sábado: 9h-13h"],
      description: "Horário comercial",
      color: "bg-amber-500"
    }
  ];

  const services = [
    "Desenvolvimento Web",
    "Formação em Programação",
    "Consultoria em Excel & VBA",
    "Dashboards Power BI",
    "Automação de Processos",
    "Sistemas Personalizados"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos <span className="text-amber-400">Conversar</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar as suas ideias em realidade? Entre em contacto e descubra 
            como podemos ajudar no seu projeto de tecnologia.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* 📞 Informações de Contacto */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 text-amber-500 mr-3" />
                Informações de Contacto
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`${info.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-700 text-sm">{detail}</p>
                      ))}
                      <p className="text-slate-500 text-xs mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Serviços */}
              <h3 className="font-semibold text-slate-900 mb-4">Serviços que Oferecemos</h3>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 📬 Formulário */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Envie a sua Mensagem</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Preencha o formulário abaixo e entraremos em contacto o mais breve possível.
                </p>
              </div>

              {/* Status */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-medium">Mensagem enviada com sucesso!</p>
                    <p className="text-green-600 text-sm">Entraremos em contacto em breve.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <div>
                    <p className="text-red-800 font-medium">Erro ao enviar a mensagem.</p>
                    <p className="text-red-600 text-sm">Tente novamente em alguns instantes.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nome *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Assunto *</label>
                    <select
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Selecione</option>
                      <option value="Desenvolvimento Web">Desenvolvimento Web</option>
                      <option value="Formação e Cursos">Formação & Cursos</option>
                      <option value="Consultoria">Consultoria</option>
                      <option value="Orçamento">Orçamento</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mensagem *</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 py-4 px-6 rounded-lg font-bold hover:from-amber-400 hover:to-yellow-400 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
