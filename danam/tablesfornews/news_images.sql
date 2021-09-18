--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4 (Debian 12.4-1.pgdg100+1)
-- Dumped by pg_dump version 12.3 (Ubuntu 12.3-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: news_images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.news_images (
    id integer NOT NULL,
    image character varying(100),
    post_id integer NOT NULL
);


ALTER TABLE public.news_images OWNER TO postgres;

--
-- Name: news_images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.news_images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.news_images_id_seq OWNER TO postgres;

--
-- Name: news_images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.news_images_id_seq OWNED BY public.news_images.id;


--
-- Name: news_images id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_images ALTER COLUMN id SET DEFAULT nextval('public.news_images_id_seq'::regclass);


--
-- Data for Name: news_images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.news_images (id, image, post_id) FROM stdin;
9	uploadedfiles/news_img/damageinheritage.jpeg	5
10	uploadedfiles/news_img/extension2.jpeg	7
11	uploadedfiles/news_img/extension1.jpeg	7
12	uploadedfiles/news_img/Char_Naryan_3.jpg	9
13	uploadedfiles/news_img/Char_Narayan_2.jpg	9
14	uploadedfiles/news_img/Char_Narayan_1.jpeg	9
15	uploadedfiles/news_img/giz.jpg	11
16	uploadedfiles/news_img/_MG_1281.jpeg	12
17	uploadedfiles/news_img/Bruce3.jpg	13
18	uploadedfiles/news_img/Bruce2.jpg	13
19	uploadedfiles/news_img/Bruce1.jpg	13
20	uploadedfiles/news_img/r2c204.jpg	18
21	uploadedfiles/news_img/documenta_nepalica.jpg	19
22	uploadedfiles/news_img/documenta_nepalica_rkVLidB.jpg	20
23	uploadedfiles/news_img/2CHIMS_launch__.jpg	21
26	uploadedfiles/news_img/IMG_4163.jpg	22
27	uploadedfiles/news_img/IMG_5597.jpg	22
28	uploadedfiles/news_img/IMG_5775.jpg	22
24	uploadedfiles/news_img/IMG_1657_1SIDnmz.jpg	22
25	uploadedfiles/news_img/DilKumar_Barahi_alIgxcA.jpg	22
\.


--
-- Name: news_images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.news_images_id_seq', 28, true);


--
-- Name: news_images news_images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_images
    ADD CONSTRAINT news_images_pkey PRIMARY KEY (id);


--
-- Name: news_images_post_id_d3ed7f0b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX news_images_post_id_d3ed7f0b ON public.news_images USING btree (post_id);


--
-- Name: news_images news_images_post_id_d3ed7f0b_fk_danam_news_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.news_images
    ADD CONSTRAINT news_images_post_id_d3ed7f0b_fk_danam_news_id FOREIGN KEY (post_id) REFERENCES public.danam_news(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

